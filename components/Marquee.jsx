"use client";

/**
 * An endless horizontal ticker.
 *
 * The list is rendered twice back to back and the track is translated
 * by exactly half its width, so the loop point is invisible.
 */
export default function Marquee({ items, speed = 42, reverse = false }) {
  const run = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div
        className="marquee__track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {run.map((item, i) => (
          <span className="marquee__item" key={`${item}-${i}`}>
            {item}
            <span className="marquee__sep">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
