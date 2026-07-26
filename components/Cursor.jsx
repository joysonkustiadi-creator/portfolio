"use client";

import { useEffect, useRef } from "react";

/**
 * A soft ring that trails the pointer, easing toward it rather than
 * tracking it exactly. Widens over links and buttons.
 *
 * The native cursor stays visible on purpose - hiding it makes precise
 * clicking harder, and the ring reads as an accent either way.
 *
 * Skipped entirely on touch devices and when reduced motion is set.
 */
export default function Cursor() {
  const ring = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const node = ring.current;
    if (!node) return;

    node.style.opacity = "1";

    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let current = { ...target };
    let frame;

    const onMove = (event) => {
      target = { x: event.clientX, y: event.clientY };

      const overInteractive = event.target.closest(
        "a, button, .project, .thumb, .portrait, .cap"
      );
      node.classList.toggle("is-wide", Boolean(overInteractive));
    };

    const loop = () => {
      current.x += (target.x - current.x) * 0.14;
      current.y += (target.y - current.y) * 0.14;
      node.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    loop();

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <span ref={ring} className="cursor-ring" aria-hidden="true" />;
}
