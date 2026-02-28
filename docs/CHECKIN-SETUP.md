# V3 MMA Check-In System Setup Guide

## Hardware Needed
- iPad (you already have this)
- USB RFID Reader 125KHz (Amazon ~$34)
- Lightning/USB-C hub with passthrough charging (~$20)
- 25-pack 125KHz EM4100 key fobs (~$10)

## Step 1: Create the Google Sheet

1. Go to https://sheets.google.com and create a new spreadsheet
2. Name it **"V3 MMA Check-Ins"**
3. Rename the first tab (bottom) to exactly: **Members**
4. In the Members tab, add these headers in Row 1:
   - A1: `fobId`
   - B1: `name`
   - C1: `registeredAt`
5. Click the **+** button at the bottom to add a second tab
6. Name it exactly: **CheckIns**
7. In the CheckIns tab, add these headers in Row 1:
   - A1: `name`
   - B1: `fobId`
   - C1: `date`
   - D1: `time`
   - E1: `dayOfWeek`

## Step 2: Add the Google Apps Script

1. In your spreadsheet, go to **Extensions → Apps Script**
2. Delete any code in the editor
3. Paste the entire script below
4. Click **Save** (floppy disk icon)
5. Click **Deploy → New deployment**
6. Click the gear icon next to "Select type" → choose **Web app**
7. Set:
   - Description: "V3 Check-In API"
   - Execute as: **Me**
   - Who has access: **Anyone**
8. Click **Deploy**
9. **Copy the Web App URL** — you'll need this

### The Apps Script Code:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var membersSheet = ss.getSheetByName("Members");
    var checkinsSheet = ss.getSheetByName("CheckIns");

    if (data.action === "checkin") {
      return handleCheckin(data.fobId, membersSheet, checkinsSheet);
    } else if (data.action === "register") {
      return handleRegister(data.fobId, data.name, membersSheet, checkinsSheet);
    }

    return jsonResponse({ status: "error", message: "Unknown action" });
  } catch (err) {
    return jsonResponse({ status: "error", message: err.toString() });
  }
}

function handleCheckin(fobId, membersSheet, checkinsSheet) {
  var member = findMember(fobId, membersSheet);

  if (!member) {
    return jsonResponse({ status: "new" });
  }

  // Log the check-in
  var now = new Date();
  var dateStr = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyy-MM-dd");
  var timeStr = Utilities.formatDate(now, Session.getScriptTimeZone(), "h:mm a");
  var dayStr = Utilities.formatDate(now, Session.getScriptTimeZone(), "EEEE");

  checkinsSheet.appendRow([member.name, fobId, dateStr, timeStr, dayStr]);

  // Count today's total check-ins
  var todayCount = countTodayCheckins(checkinsSheet, dateStr);

  return jsonResponse({
    status: "ok",
    name: member.name,
    todayCount: todayCount
  });
}

function handleRegister(fobId, name, membersSheet, checkinsSheet) {
  // Check if fob already exists
  var existing = findMember(fobId, membersSheet);
  if (existing) {
    return jsonResponse({ status: "error", message: "Fob already registered to " + existing.name });
  }

  // Register the fob
  var now = new Date();
  var dateTimeStr = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyy-MM-dd h:mm a");
  membersSheet.appendRow([fobId, name, dateTimeStr]);

  // Also log the first check-in
  var dateStr = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyy-MM-dd");
  var timeStr = Utilities.formatDate(now, Session.getScriptTimeZone(), "h:mm a");
  var dayStr = Utilities.formatDate(now, Session.getScriptTimeZone(), "EEEE");
  checkinsSheet.appendRow([name, fobId, dateStr, timeStr, dayStr]);

  var todayCount = countTodayCheckins(checkinsSheet, dateStr);

  return jsonResponse({
    status: "ok",
    name: name,
    todayCount: todayCount
  });
}

function findMember(fobId, membersSheet) {
  var data = membersSheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]).trim() === String(fobId).trim()) {
      return { name: data[i][1], row: i + 1 };
    }
  }
  return null;
}

function countTodayCheckins(checkinsSheet, dateStr) {
  var data = checkinsSheet.getDataRange().getValues();
  var count = 0;
  for (var i = 1; i < data.length; i++) {
    if (data[i][2] === dateStr) count++;
  }
  return count;
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Handle CORS preflight for the web page
function doGet(e) {
  return jsonResponse({ status: "ok", message: "V3 MMA Check-In API" });
}
```

## Step 3: Update the Check-In Page

1. Open `src/app/checkin/page.tsx`
2. Find the line: `const APPS_SCRIPT_URL = "PASTE_YOUR_APPS_SCRIPT_URL_HERE";`
3. Replace with your actual Apps Script URL from Step 2

## Step 4: iPad Setup

1. Connect the USB RFID reader to the iPad via the Lightning/USB-C hub
2. Keep the iPad plugged into power via the hub's passthrough charging port
3. Open Safari and go to `https://v3mma.com/checkin`
4. To lock the iPad to this screen:
   - Settings → Accessibility → Guided Access → ON
   - Set a passcode
   - In Safari on the check-in page, triple-click the side/home button
   - Tap "Start" to lock into Guided Access mode
5. The iPad will now stay on the check-in screen permanently

## How It Works

1. **Existing member walks in** → taps fob → sees "Welcome back, [Name]!" → auto-resets after 4 seconds
2. **New member/new fob** → taps fob → "New Fob Detected" screen → you type their name → "Register & Check In" → done
3. Everything logs to your Google Sheet in real time
4. Check the Google Sheet weekly to see who hasn't been showing up

## Tracking Inactive Members

In your Google Sheet, you can add a formula in the Members tab to show "days since last check-in":
- In cell D1, type: `lastCheckIn`
- In cell E1, type: `daysSince`
- In D2, paste: `=IFERROR(MAXIFS(CheckIns!C:C, CheckIns!B:B, A2), "Never")`
- In E2, paste: `=IF(D2="Never", 999, TODAY()-DATEVALUE(D2))`
- Drag D2:E2 down for all members
- Sort by column E descending to see who's been gone the longest
