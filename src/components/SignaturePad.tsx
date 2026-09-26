"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";

export type SignaturePadHandle = {
  /** PNG data URL of the signature, or null if nothing has been drawn. */
  getDataUrl: () => string | null;
  clear: () => void;
};

/**
 * Finger/stylus signature capture for the trial kiosk.
 *
 * Uses Pointer Events so finger, Apple Pencil, and mouse all work through one
 * code path. The canvas backing store is scaled by devicePixelRatio so strokes
 * stay crisp on the iPad's retina screen, and `touch-action: none` stops the
 * page from scrolling out from under someone mid-signature.
 */
const SignaturePad = forwardRef<SignaturePadHandle, { onInkChange?: (hasInk: boolean) => void }>(
  function SignaturePad({ onInkChange }, ref) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const drawing = useRef(false);
    const lastPoint = useRef<{ x: number; y: number } | null>(null);
    const [hasInk, setHasInk] = useState(false);

    const setInk = useCallback(
      (v: boolean) => {
        setHasInk(v);
        onInkChange?.(v);
      },
      [onInkChange]
    );

    /** Sizes the backing store to the element's CSS box times DPR. Clears the canvas. */
    const resize = useCallback(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineWidth = 2.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#0f1729";
      ctx.clearRect(0, 0, rect.width, rect.height);
      setInk(false);
    }, [setInk]);

    useEffect(() => {
      resize();
      const canvas = canvasRef.current;
      if (!canvas || typeof ResizeObserver === "undefined") return;
      // Rotating the iPad changes the canvas box; re-scale (and clear) when it does.
      let last = `${canvas.clientWidth}x${canvas.clientHeight}`;
      const ro = new ResizeObserver(() => {
        const next = `${canvas.clientWidth}x${canvas.clientHeight}`;
        if (next !== last) {
          last = next;
          resize();
        }
      });
      ro.observe(canvas);
      return () => ro.disconnect();
    }, [resize]);

    const pointAt = (e: React.PointerEvent<HTMLCanvasElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const start = (e: React.PointerEvent<HTMLCanvasElement>) => {
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      drawing.current = true;
      const p = pointAt(e);
      lastPoint.current = p;
      // A tap with no movement should still leave a mark (a dot).
      const ctx = e.currentTarget.getContext("2d");
      if (ctx) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.25, 0, Math.PI * 2);
        ctx.fillStyle = "#0f1729";
        ctx.fill();
      }
      if (!hasInk) setInk(true);
    };

    const move = (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!drawing.current) return;
      e.preventDefault();
      const ctx = e.currentTarget.getContext("2d");
      const from = lastPoint.current;
      if (!ctx || !from) return;
      const to = pointAt(e);
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
      lastPoint.current = to;
    };

    const end = (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!drawing.current) return;
      drawing.current = false;
      lastPoint.current = null;
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    };

    useImperativeHandle(ref, () => ({
      getDataUrl: () => {
        const canvas = canvasRef.current;
        if (!canvas || !hasInk) return null;
        // Flatten onto white so the PNG reads correctly in the archived PDF.
        const flat = document.createElement("canvas");
        flat.width = canvas.width;
        flat.height = canvas.height;
        const ctx = flat.getContext("2d");
        if (!ctx) return null;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, flat.width, flat.height);
        ctx.drawImage(canvas, 0, 0);
        return flat.toDataURL("image/png");
      },
      clear: resize,
    }));

    return (
      <div>
        <div className="relative rounded-xl bg-white border-2 border-white/20 overflow-hidden">
          <canvas
            ref={canvasRef}
            onPointerDown={start}
            onPointerMove={move}
            onPointerUp={end}
            onPointerCancel={end}
            onPointerLeave={end}
            className="block w-full h-40 sm:h-48 touch-none cursor-crosshair"
            aria-label="Signature area — sign with your finger"
          />
          {!hasInk && (
            <div className="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none">
              <div className="w-3/4 border-b-2 border-dashed border-slate-300 text-center">
                <span className="text-slate-400 text-sm">Sign here with your finger</span>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-end mt-2">
          <button
            type="button"
            onClick={resize}
            disabled={!hasInk}
            className="text-slate-400 hover:text-white disabled:opacity-40 disabled:hover:text-slate-400 text-sm font-medium px-3 py-2"
          >
            Clear signature
          </button>
        </div>
      </div>
    );
  }
);

export default SignaturePad;
