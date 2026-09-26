"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import SignaturePad, { type SignaturePadHandle } from "@/components/SignaturePad";
import WaiverText from "@/components/WaiverText";
import {
  WAIVER_VERSION,
  WAIVER_ENDPOINT,
  postSubmission,
  queueSubmission,
  flushQueue,
  readQueue,
  type WaiverSubmission,
} from "@/lib/waiver";

type Screen = "idle" | "form" | "waiver" | "sending" | "done" | "error";

export default function CheckinPage() {
  const [screen, setScreen] = useState<Screen>("idle");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isMinor, setIsMinor] = useState(false);
  const [guardianName, setGuardianName] = useState("");
  const [photoRelease, setPhotoRelease] = useState(false);
  const [scrolledToEnd, setScrolledToEnd] = useState(false);
  const [hasInk, setHasInk] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [queuedCount, setQueuedCount] = useState(0);

  const sigRef = useRef<SignaturePadHandle>(null);
  const waiverScrollRef = useRef<HTMLDivElement>(null);
  const waiverContentRef = useRef<HTMLDivElement>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reset = useCallback(() => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    setFirstName("");
    setLastName("");
    setIsMinor(false);
    setGuardianName("");
    setPhotoRelease(false);
    setScrolledToEnd(false);
    setHasInk(false);
    setErrorMsg("");
    sigRef.current?.clear();
    setScreen("idle");
  }, []);

  // Anything stranded on this iPad by a dropped connection goes out on load.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (WAIVER_ENDPOINT) {
        try {
          await flushQueue();
        } catch {
          // Still offline — the queue stays put and retries on the next load.
        }
      }
      if (!cancelled) setQueuedCount(readQueue().length);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const onWaiverScroll = () => {
    const el = waiverScrollRef.current;
    if (!el) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 48) setScrolledToEnd(true);
  };

  /** If the whole agreement already fits without scrolling, don't demand a scroll. */
  const checkIfFits = useCallback(() => {
    const el = waiverScrollRef.current;
    if (el && el.scrollHeight <= el.clientHeight + 48) setScrolledToEnd(true);
  }, []);

  useEffect(() => {
    if (screen === "waiver") {
      const t = setTimeout(checkIfFits, 150);
      return () => clearTimeout(t);
    }
  }, [screen, isMinor, checkIfFits]);

  const nameOk = firstName.trim().length > 1 && lastName.trim().length > 1;
  const guardianOk = !isMinor || guardianName.trim().length > 1;
  const canSign = scrolledToEnd && hasInk && nameOk && guardianOk;

  async function handleSubmit() {
    const signatureDataUrl = sigRef.current?.getDataUrl();
    if (!signatureDataUrl || !canSign) return;

    const submission: WaiverSubmission = {
      action: "waiver",
      waiverVersion: WAIVER_VERSION,
      signedAt: new Date().toISOString(),
      participantFirstName: firstName.trim(),
      participantLastName: lastName.trim(),
      isMinor,
      guardianName: isMinor ? guardianName.trim() : "",
      photoRelease,
      signatureDataUrl,
      waiverHtml: waiverContentRef.current?.innerHTML ?? "",
      userAgent: navigator.userAgent,
    };

    setScreen("sending");
    try {
      await postSubmission(submission);
      setScreen("done");
      resetTimer.current = setTimeout(reset, 7000);
    } catch (err) {
      // Never lose a signature: park it on the device and retry later.
      queueSubmission(submission);
      setQueuedCount(readQueue().length);
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
      setScreen("error");
      resetTimer.current = setTimeout(reset, 12000);
    }
  }

  // h-dvh (not min-h-screen) pins the kiosk to exactly one viewport so the
  // waiver pane can own the scrolling. dvh tracks iPad Safari's collapsing
  // toolbars, which vh does not.
  return (
    <div className="h-dvh overflow-hidden bg-[#0f1729] text-white flex flex-col select-none">
      {/* Kiosk header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3">
          <Image src="/images/website-logo.png" alt="V3 MMA" width={500} height={378} className="w-auto h-9" />
          <div>
            <span className="text-white font-bold leading-tight">V3 MMA</span>
            <span className="block text-[9px] text-slate-500 tracking-[0.2em] uppercase -mt-0.5">
              Free Trial Check-In
            </span>
          </div>
        </div>
        {screen !== "idle" && screen !== "done" && (
          <button
            onClick={reset}
            className="text-slate-500 hover:text-slate-300 text-sm px-4 py-2 rounded-lg"
          >
            Start over
          </button>
        )}
      </header>

      <main className="flex-1 flex flex-col min-h-0">
        {/* ---------- IDLE ---------- */}
        {screen === "idle" && (
          <div className="flex-1 min-h-0 overflow-y-auto flex flex-col items-center justify-center px-6 py-8 text-center">
            <div className="w-24 h-24 mb-8 rounded-full bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center">
              <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-4">Welcome to V3 MMA</h1>
            <p className="text-slate-400 text-lg sm:text-xl max-w-lg mb-10">
              Before your first class, we just need your name and a signature on our waiver. Takes
              about a minute.
            </p>
            <button
              onClick={() => setScreen("form")}
              className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-2xl text-xl font-bold transition-all"
            >
              Get Started
            </button>
            {queuedCount > 0 && (
              <p className="text-amber-400/80 text-xs mt-8">
                {queuedCount} signed waiver{queuedCount === 1 ? "" : "s"} saved on this iPad waiting
                to upload. They will send automatically once the connection is back.
              </p>
            )}
          </div>
        )}

        {/* ---------- NAME ---------- */}
        {screen === "form" && (
          <div className="flex-1 min-h-0 overflow-y-auto flex flex-col items-center justify-center px-6 py-8">
            <div className="w-full max-w-lg">
              <h2 className="text-3xl font-black mb-2 text-center">What&apos;s your name?</h2>
              <p className="text-slate-400 text-center mb-8">
                Enter the name of the person training today.
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  autoComplete="off"
                  autoCapitalize="words"
                  className="w-full px-6 py-5 bg-white/5 border border-white/20 rounded-xl text-white text-xl placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  autoComplete="off"
                  autoCapitalize="words"
                  className="w-full px-6 py-5 bg-white/5 border border-white/20 rounded-xl text-white text-xl placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />

                <label className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/10 rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isMinor}
                    onChange={(e) => {
                      // Section B changes the document length, so the bottom has
                      // to be reached again before the signature box unlocks.
                      setIsMinor(e.target.checked);
                      setScrolledToEnd(false);
                    }}
                    className="mt-1 w-6 h-6 accent-blue-500 shrink-0"
                  />
                  <span>
                    <span className="block text-white font-semibold">
                      This person is under 18
                    </span>
                    <span className="block text-slate-400 text-sm mt-0.5">
                      A parent or legal guardian has to sign instead.
                    </span>
                  </span>
                </label>

                {isMinor && (
                  <input
                    type="text"
                    value={guardianName}
                    onChange={(e) => setGuardianName(e.target.value)}
                    placeholder="Parent / legal guardian full name"
                    autoComplete="off"
                    autoCapitalize="words"
                    className="w-full px-6 py-5 bg-amber-400/5 border border-amber-400/40 rounded-xl text-white text-xl placeholder:text-amber-200/40 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                )}
              </div>

              <button
                onClick={() => {
                  setScrolledToEnd(false);
                  setScreen("waiver");
                }}
                disabled={!nameOk || !guardianOk}
                className="w-full mt-8 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white py-5 rounded-xl text-xl font-bold transition-all"
              >
                Continue to Waiver
              </button>
            </div>
          </div>
        )}

        {/* ---------- WAIVER + SIGNATURE ---------- */}
        {screen === "waiver" && (
          <div className="flex-1 flex flex-col px-4 sm:px-6 pb-6 min-h-0">
            <div className="w-full max-w-3xl mx-auto flex flex-col flex-1 min-h-0">
              <p className="text-slate-400 text-sm py-3 shrink-0">
                Signing as{" "}
                <span className="text-white font-semibold">
                  {isMinor ? guardianName : `${firstName} ${lastName}`}
                </span>
                {isMinor && (
                  <>
                    {" "}
                    for{" "}
                    <span className="text-white font-semibold">
                      {firstName} {lastName}
                    </span>
                  </>
                )}
              </p>

              <div
                ref={waiverScrollRef}
                onScroll={onWaiverScroll}
                className="flex-1 min-h-0 overflow-y-auto bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-8"
              >
                <div ref={waiverContentRef}>
                  <WaiverText isMinor={isMinor} />
                </div>
              </div>

              {!scrolledToEnd ? (
                <div className="shrink-0 mt-4 text-center bg-blue-500/10 border border-blue-500/30 rounded-xl py-4 px-6">
                  <p className="text-blue-200 font-semibold">
                    Please scroll to the bottom to read the full agreement
                  </p>
                  <p className="text-blue-300/60 text-sm mt-1">
                    The signature box unlocks once you reach the end.
                  </p>
                </div>
              ) : (
                <div className="shrink-0 mt-4 space-y-4">
                  <label className="flex items-start gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-xl cursor-pointer">
                    <input
                      type="checkbox"
                      checked={photoRelease}
                      onChange={(e) => setPhotoRelease(e.target.checked)}
                      className="mt-0.5 w-6 h-6 accent-blue-500 shrink-0"
                    />
                    <span className="text-sm">
                      <span className="block text-white font-semibold">
                        Optional — Section 8, Photo &amp; Media Release
                      </span>
                      <span className="block text-slate-400 mt-0.5">
                        V3 MMA may use photos or video of{" "}
                        {isMinor ? "my child" : "me"} in marketing and social media. Declining does
                        not affect the rest of the agreement.
                      </span>
                    </span>
                  </label>

                  <SignaturePad ref={sigRef} onInkChange={setHasInk} />

                  <button
                    onClick={handleSubmit}
                    disabled={!canSign}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white py-5 rounded-xl text-xl font-bold transition-all"
                  >
                    {hasInk ? "Agree & Submit" : "Sign above to continue"}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ---------- SENDING ---------- */}
        {screen === "sending" && (
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-10 h-10 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-6" />
            <p className="text-slate-400 text-lg">Saving your waiver…</p>
          </div>
        )}

        {/* ---------- DONE ---------- */}
        {screen === "done" && (
          <div className="flex-1 min-h-0 overflow-y-auto flex flex-col items-center justify-center px-6 py-8 text-center">
            <div className="w-24 h-24 mb-8 rounded-full bg-green-500/20 border-2 border-green-400/50 flex items-center justify-center">
              <svg className="w-14 h-14 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              You&apos;re all set, {firstName}!
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl max-w-md mb-10">
              Hand the iPad back to a coach and get ready to train. Welcome to V3.
            </p>
            <button
              onClick={reset}
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 rounded-xl font-semibold"
            >
              Done
            </button>
          </div>
        )}

        {/* ---------- ERROR ---------- */}
        {screen === "error" && (
          <div className="flex-1 min-h-0 overflow-y-auto flex flex-col items-center justify-center px-6 py-8 text-center">
            <div className="w-20 h-20 mb-6 rounded-full bg-amber-500/20 border-2 border-amber-400/50 flex items-center justify-center">
              <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-3xl font-black mb-3">Saved on this iPad</h2>
            <p className="text-slate-300 text-lg max-w-lg mb-2">
              Your signature was captured, but it couldn&apos;t upload right now. It&apos;s stored
              safely here and will send on its own once the gym WiFi is back.
            </p>
            <p className="text-slate-500 text-sm mb-8">Please let a coach know. ({errorMsg})</p>
            <button
              onClick={reset}
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 rounded-xl font-semibold"
            >
              Done
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
