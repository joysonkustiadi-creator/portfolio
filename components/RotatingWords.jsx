"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through a list of words, one at a time.
 *
 * The tallest word reserves the height up front, so the line below
 * never jumps as the text changes.
 */
export default function RotatingWords({ words, interval = 2600 }) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (words.length < 2) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const timer = setInterval(() => {
      setLeaving(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setLeaving(false);
      }, 380);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="rotator">
      {/* Invisible copy of every word, so the box is already the right size */}
      <span className="rotator__sizer" aria-hidden="true">
        {words.map((word) => (
          <span key={word}>{word}</span>
        ))}
      </span>

      <span className={`rotator__word${leaving ? " is-leaving" : ""}`} aria-live="polite">
        {words[index]}
      </span>
    </span>
  );
}
