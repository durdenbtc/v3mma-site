/**
 * Version of the waiver text currently in use. Bump this whenever the agreement
 * wording changes — every stored submission records the version it was signed
 * under, so an old signature always maps back to the exact text agreed to.
 */
export const WAIVER_VERSION = "2026-09-26";

export const GYM_LEGAL_NAME = "HURRICANE MMA LLC";
export const GYM_DBA = "V3 MMA Gym & Fitness";

/**
 * Google Apps Script web app URL that receives signed waivers.
 * Set NEXT_PUBLIC_WAIVER_ENDPOINT at build time (see docs/WAIVER-KIOSK-SETUP.md).
 */
export const WAIVER_ENDPOINT = process.env.NEXT_PUBLIC_WAIVER_ENDPOINT ?? "";

export type WaiverSubmission = {
  action: "waiver";
  waiverVersion: string;
  signedAt: string;
  participantFirstName: string;
  participantLastName: string;
  isMinor: boolean;
  guardianName: string;
  photoRelease: boolean;
  signatureDataUrl: string;
  /** innerHTML of the agreement exactly as displayed, archived with the signature. */
  waiverHtml: string;
  userAgent: string;
};

const QUEUE_KEY = "v3mma.waiver.queue";

/** Submissions that failed to send, kept on the iPad until they go through. */
export function readQueue(): WaiverSubmission[] {
  try {
    const raw = localStorage.getItem(QUEUE_KEY);
    return raw ? (JSON.parse(raw) as WaiverSubmission[]) : [];
  } catch {
    return [];
  }
}

export function queueSubmission(sub: WaiverSubmission) {
  try {
    localStorage.setItem(QUEUE_KEY, JSON.stringify([...readQueue(), sub]));
  } catch {
    // Storage full or blocked — nothing more we can do locally.
  }
}

function writeQueue(items: WaiverSubmission[]) {
  try {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

/**
 * POSTs one submission. Uses text/plain so the browser skips the CORS preflight
 * that Apps Script web apps cannot answer.
 */
export async function postSubmission(sub: WaiverSubmission): Promise<void> {
  if (!WAIVER_ENDPOINT) throw new Error("Waiver endpoint is not configured");
  const res = await fetch(WAIVER_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(sub),
  });
  const data = (await res.json()) as { status?: string; message?: string };
  if (data.status !== "ok") throw new Error(data.message || "Server rejected the submission");
}

/** Retries anything stranded on the device. Returns how many cleared. */
export async function flushQueue(): Promise<number> {
  const items = readQueue();
  if (!items.length) return 0;
  const remaining: WaiverSubmission[] = [];
  let sent = 0;
  for (const item of items) {
    try {
      await postSubmission(item);
      sent++;
    } catch {
      remaining.push(item);
    }
  }
  writeQueue(remaining);
  return sent;
}
