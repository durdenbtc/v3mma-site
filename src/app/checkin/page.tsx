"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  CONFIG – Replace this with your deployed Google Apps Script URL    */
/* ------------------------------------------------------------------ */
const APPS_SCRIPT_URL = "PASTE_YOUR_APPS_SCRIPT_URL_HERE";

type Screen = "idle" | "welcome" | "register" | "error";

export default function CheckinPage() {
  const [screen, setScreen] = useState<Screen>("idle");
  const [memberName, setMemberName] = useState("");
  const [fobBuffer, setFobBuffer] = useState("");
  const [currentFobId, setCurrentFobId] = useState("");
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [todayCount, setTodayCount] = useState(0);
  const [clock, setClock] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(null);
  const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Live clock
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    tick();
    const interval = setInterval(tick, 10000);
    return () => clearInterval(interval);
  }, []);

  // Auto-reset back to idle after welcome/error
  const scheduleReset = useCallback((ms = 4000) => {
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    resetTimerRef.current = setTimeout(() => {
      setScreen("idle");
      setMemberName("");
      setCurrentFobId("");
      setNewName("");
      setErrorMsg("");
    }, ms);
  }, []);

  // Handle fob scan (keyboard input capture)
  useEffect(() => {
    let buffer = "";
    let timeout: NodeJS.Timeout;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if we're in the name registration input
      if (screen === "register" && e.target instanceof HTMLInputElement) return;

      if (e.key === "Enter" && buffer.length >= 4) {
        const fobId = buffer.trim();
        buffer = "";
        handleScan(fobId);
      } else if (e.key.length === 1) {
        buffer += e.key;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          buffer = "";
        }, 300); // Reader sends chars rapidly, reset if gap > 300ms
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeout);
    };
  }, [screen]);

  async function handleScan(fobId: string) {
    if (loading) return;
    setLoading(true);
    setCurrentFobId(fobId);

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ action: "checkin", fobId }),
      });
      const data = await res.json();

      if (data.status === "ok") {
        setMemberName(data.name);
        setTodayCount(data.todayCount || 0);
        setScreen("welcome");
        playSound("success");
        scheduleReset(4000);
      } else if (data.status === "new") {
        setScreen("register");
        playSound("register");
        setTimeout(() => nameInputRef.current?.focus(), 200);
      } else {
        setErrorMsg(data.message || "Something went wrong");
        setScreen("error");
        scheduleReset(5000);
      }
    } catch {
      setErrorMsg("Can't reach server — check WiFi");
      setScreen("error");
      scheduleReset(5000);
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if (!newName.trim() || loading) return;
    setLoading(true);

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          action: "register",
          fobId: currentFobId,
          name: newName.trim(),
        }),
      });
      const data = await res.json();

      if (data.status === "ok") {
        setMemberName(newName.trim());
        setTodayCount(data.todayCount || 0);
        setScreen("welcome");
        playSound("success");
        scheduleReset(4000);
      } else {
        setErrorMsg(data.message || "Registration failed");
        setScreen("error");
        scheduleReset(5000);
      }
    } catch {
      setErrorMsg("Can't reach server — check WiFi");
      setScreen("error");
      scheduleReset(5000);
    } finally {
      setLoading(false);
    }
  }

  function playSound(type: "success" | "register") {
    try {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "success") {
        osc.frequency.value = 880;
        gain.gain.value = 0.15;
        osc.start();
        osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.1);
        osc.stop(ctx.currentTime + 0.2);
      } else {
        osc.frequency.value = 660;
        gain.gain.value = 0.1;
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      }
    } catch {
      // Audio not supported, no big deal
    }
  }

  return (
    <div className="min-h-screen bg-[#0f1729] flex flex-col items-center justify-center px-6 select-none">
      {/* Clock */}
      <div className="fixed top-6 right-6 text-slate-500 text-lg font-mono">
        {clock}
      </div>

      {/* Logo area */}
      <div className="fixed top-6 left-6 flex items-center gap-3">
        <img src="/images/website-logo.png" alt="V3 MMA" className="h-10" />
        <span className="text-white font-bold text-lg tracking-tight hidden sm:inline">
          V3 MMA
        </span>
      </div>

      {/* ---- IDLE SCREEN ---- */}
      {screen === "idle" && (
        <div className="text-center animate-pulse-slow">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            Tap Your Fob
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl">
            Hold your key fob on the reader to check in
          </p>
          {loading && (
            <div className="mt-8">
              <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto" />
            </div>
          )}
        </div>
      )}

      {/* ---- WELCOME SCREEN ---- */}
      {screen === "welcome" && (
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-500/20 border-2 border-green-400/50 flex items-center justify-center">
            <svg
              className="w-14 h-14 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-blue-400 text-lg font-semibold uppercase tracking-widest mb-2">
            Welcome back
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4">
            {memberName}
          </h1>
          <p className="text-slate-400 text-lg">
            Check-in #{todayCount} today &bull; Let&apos;s work
          </p>
        </div>
      )}

      {/* ---- REGISTER SCREEN ---- */}
      {screen === "register" && (
        <div className="text-center w-full max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-500/20 border-2 border-amber-400/50 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
            New Fob Detected
          </h2>
          <p className="text-slate-400 mb-8">
            Enter the member&apos;s name to register this fob
          </p>
          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            <input
              ref={nameInputRef}
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Member name (e.g. John Smith)"
              className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-xl text-center placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              autoComplete="off"
              autoFocus
            />
            <button
              type="submit"
              disabled={!newName.trim() || loading}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white py-4 rounded-xl text-xl font-bold transition-all"
            >
              {loading ? "Registering..." : "Register & Check In"}
            </button>
            <button
              type="button"
              onClick={() => {
                setScreen("idle");
                setNewName("");
              }}
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* ---- ERROR SCREEN ---- */}
      {screen === "error" && (
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 border-2 border-red-400/50 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Oops</h2>
          <p className="text-slate-400 text-lg">{errorMsg}</p>
        </div>
      )}

      {/* Footer */}
      <div className="fixed bottom-6 text-center">
        <p className="text-slate-600 text-xs">
          V3 MMA Member Check-In &bull; Port St. Lucie, FL
        </p>
      </div>
    </div>
  );
}
