# Free-Trial Waiver Kiosk — Setup

The iPad at the front desk runs `https://v3mma.com/checkin`. A walk-in enters their name,
scrolls the waiver, signs with a finger, and taps submit. Each signature is archived as a
PDF in Google Drive with a row in a Google Sheet.

**Why Drive and not an R2 bucket or the iPad itself:** the site is a static export with no
server, so it cannot hold a secret key — an R2 upload would need a Cloudflare Worker in
front of it just to sign requests. Google Apps Script is a free endpoint you already have
the account for, and it writes straight into Drive, which is backed up, searchable, and
survives the iPad being lost, wiped, or replaced. Storing waivers only on the iPad would
put your entire legal record on one device with no backup — don't. The kiosk *does* keep
a local copy when the upload fails, but only as a retry queue (see "If the WiFi drops").

---

## Step 1 — Create the Drive folder and Sheet

1. In Google Drive, make a folder named **V3 MMA Signed Waivers**.
2. Open it and copy the folder ID from the URL — the part after `/folders/`:
   `https://drive.google.com/drive/folders/`**`1AbC...xyz`**
3. Create a new Google Sheet named **V3 MMA Waivers**.
4. Rename the first tab to exactly **Waivers**.
5. Put these headers in row 1:

   | A | B | C | D | E | F | G | H | I |
   |---|---|---|---|---|---|---|---|---|
   | signedAt | participant | isMinor | guardian | photoRelease | waiverVersion | pdfLink | signatureImage | userAgent |

---

## Step 2 — Add the Apps Script

In the Sheet: **Extensions → Apps Script**. Delete the placeholder and paste this:

```javascript
// V3 MMA — free-trial waiver receiver.
// Stores a PDF of each signed waiver in Drive and logs a row in this Sheet.

var FOLDER_ID = 'PASTE_YOUR_FOLDER_ID_HERE';
var SHEET_NAME = 'Waivers';

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);

    if (d.action !== 'waiver') return json({ status: 'error', message: 'Unknown action' });
    if (!d.participantFirstName || !d.participantLastName) return json({ status: 'error', message: 'Missing name' });
    if (!d.signatureDataUrl) return json({ status: 'error', message: 'Missing signature' });

    var participant = (d.participantFirstName + ' ' + d.participantLastName).trim();
    var signedAt = d.signedAt ? new Date(d.signedAt) : new Date();
    var stamp = Utilities.formatDate(signedAt, 'America/New_York', 'yyyy-MM-dd_HHmm');
    var safeName = participant.replace(/[^A-Za-z0-9 ._-]/g, '').replace(/\s+/g, '-');

    var folder = DriveApp.getFolderById(FOLDER_ID);

    // The signature is also saved on its own. Google's HTML-to-PDF converter is
    // inconsistent about embedded base64 images, so this guarantees the actual
    // signature survives even if it fails to render inside the PDF.
    var sigFile = folder.createFile(
      dataUrlToBlob(d.signatureDataUrl, stamp + '_' + safeName + '_signature.png')
    );

    var pdf = buildPdf(d, participant, signedAt);
    pdf.setName(stamp + '_' + safeName + '.pdf');
    var file = folder.createFile(pdf);

    SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName(SHEET_NAME)
      .appendRow([
        signedAt,
        participant,
        d.isMinor ? 'YES' : 'no',
        d.guardianName || '',
        d.photoRelease ? 'YES' : 'no',
        d.waiverVersion || '',
        file.getUrl(),
        sigFile.getUrl(),
        d.userAgent || ''
      ]);

    return json({ status: 'ok', pdfUrl: file.getUrl() });
  } catch (err) {
    return json({ status: 'error', message: String(err) });
  }
}

// Renders the agreement exactly as it was displayed, plus the signature block.
// The CSS keeps the minor notice (an <h2>) 6pt larger than body text so the
// archived PDF still satisfies Fla. Stat. 744.301(3)(b).
function buildPdf(d, participant, signedAt) {
  var sig = d.signatureDataUrl || '';
  var css =
    'body{font-family:Helvetica,Arial,sans-serif;font-size:12pt;line-height:1.45;color:#111;margin:40px}' +
    'h2{font-size:18pt;font-weight:bold;line-height:1.3;margin:14px 0}' +
    'h3{font-size:14pt;margin:10px 0}h4{font-size:13pt;margin:10px 0}' +
    'p{margin:9px 0}strong{font-weight:bold}' +
    '.meta{border:1px solid #999;padding:12px;margin-bottom:20px;font-size:11pt}' +
    '.sigwrap{margin-top:28px;border-top:2px solid #111;padding-top:14px}' +
    '.sigimg{height:110px}';

  var meta =
    '<div class="meta"><strong>Participant:</strong> ' + esc(participant) + '<br>' +
    '<strong>Signed:</strong> ' + Utilities.formatDate(signedAt, 'America/New_York', "MMMM d, yyyy 'at' h:mm a z") + '<br>' +
    '<strong>Minor:</strong> ' + (d.isMinor ? 'Yes — signed by guardian ' + esc(d.guardianName || '') : 'No') + '<br>' +
    '<strong>Photo/media release (Section 8):</strong> ' + (d.photoRelease ? 'Granted' : 'Declined') + '<br>' +
    '<strong>Waiver version:</strong> ' + esc(d.waiverVersion || '') + '</div>';

  var signer = d.isMinor ? (d.guardianName || '') : participant;
  var sigBlock =
    '<div class="sigwrap"><p><strong>Signature' + (d.isMinor ? ' of parent / legal guardian' : '') + ':</strong></p>' +
    '<img class="sigimg" src="' + sig + '">' +
    '<p>' + esc(signer) + (d.isMinor ? ' — guardian of ' + esc(participant) : '') + '<br>' +
    Utilities.formatDate(signedAt, 'America/New_York', "MMMM d, yyyy 'at' h:mm a z") + '</p>' +
    '<p style="font-size:10pt;color:#555">Signed electronically at the V3 MMA front-desk kiosk. ' +
    'The signer consented to electronic signature under Section 9(e) of this Agreement.</p></div>';

  var html = '<html><head><meta charset="utf-8"><style>' + css + '</style></head><body>' +
    meta + (d.waiverHtml || '') + sigBlock + '</body></html>';

  return Utilities.newBlob(html, 'text/html', 'waiver.html').getAs('application/pdf');
}

function dataUrlToBlob(dataUrl, name) {
  var parts = String(dataUrl).split(',');
  var mime = (parts[0].match(/data:([^;]+)/) || [null, 'image/png'])[1];
  return Utilities.newBlob(Utilities.base64Decode(parts[1]), mime, name);
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Replace `PASTE_YOUR_FOLDER_ID_HERE` with the folder ID from Step 1, then **Save**.

---

## Step 3 — Deploy it

1. **Deploy → New deployment**
2. Gear icon next to "Select type" → **Web app**
3. Description: `V3 Waiver API` · Execute as: **Me** · Who has access: **Anyone**
4. **Deploy**, approve the permissions prompt (it needs Drive + Sheets access)
5. Copy the **Web app URL** — it looks like
   `https://script.google.com/macros/s/AKfycb.../exec`

**Do one test run before you rely on this.** Sign a throwaway waiver on the kiosk, then open
the Drive folder and confirm you got a PDF *and* a `_signature.png`, and that the signature
is actually visible inside the PDF. Google's HTML-to-PDF converter is occasionally
inconsistent about embedded images — if the PDF shows a blank box where the signature should
be, the separate PNG is your record and the Sheet links to it in the `signatureImage` column.
Tell me if that happens and I'll switch the PDF to a different generator.

> "Anyone" means anyone who knows the URL can POST to it. That is unavoidable for a static
> site — the URL ships inside the page's JavaScript either way. The script rejects anything
> without a name and a signature. If you ever see junk rows, redeploy to get a new URL.

---

## Step 4 — Point the site at it

Create `.env.production` in the repo root:

```
NEXT_PUBLIC_WAIVER_ENDPOINT=https://script.google.com/macros/s/AKfycb.../exec
```

Commit it. This value is not a secret — it is embedded in the page's JavaScript regardless,
so keeping it out of the repo buys nothing and would break the Fly deploy, which builds from
a clean checkout.

Then deploy as usual. Until this is set, the kiosk captures signatures and queues them on the
iPad but cannot upload — the screen says so plainly rather than pretending it worked.

---

## Step 5 — Set up the iPad

1. Open Safari → `https://v3mma.com/checkin`
2. Share button → **Add to Home Screen**. Launching from that icon runs it full-screen with
   no address bar, so nobody wanders off to Safari.
3. **Settings → Display & Brightness → Auto-Lock → Never**
4. **Settings → Accessibility → Guided Access → On.** Then open the kiosk and triple-click
   the side button to lock the iPad into it. This is what stops someone poking around your
   iPad while you're coaching.

---

## If the WiFi drops

The kiosk never loses a signature. If the upload fails it stores the whole submission in the
iPad's local storage and shows "Saved on this iPad". Every time the page loads it retries
anything queued, and the idle screen shows a count of what is still waiting. Once the
connection is back, open the kiosk and the backlog uploads on its own.

If the count never clears, the endpoint URL is wrong or the deployment was revoked — check
Step 3/4.

---

## Changing the waiver later

1. Edit `src/components/WaiverText.tsx`.
2. Bump `WAIVER_VERSION` in `src/lib/waiver.ts` to the new date.

Every stored row records the version signed, and each PDF embeds the exact text that was on
screen — so an old signature always maps back to the wording that person actually agreed to.
Never edit an already-archived PDF.

---

## What still needs a lawyer

The text came from the review in `waiver-release-review.md`. Two things in that document's
checklist are still open and are worth confirming before you rely on this in a dispute:

- That Section B "waives no more than allowed" under Fla. Stat. § 744.301(3), which is what
  earns the rebuttable presumption in § 744.301(3)(c).
- That the indemnification clause (Section 6) is enforceable as written for a consumer
  membership.

The kiosk renders the minor notice in uppercase at 18pt against 12pt body text in the PDF
(24px vs 16px on screen) — comfortably past the statute's 5-point minimum. That is a
formatting requirement met, not a legal opinion.
