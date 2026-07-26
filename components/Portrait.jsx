"use client";

import { useState } from "react";

/**
 * The photo slot.
 *
 * Drop a square image at public/portrait.jpg. Until that file exists the
 * frame falls back to initials, so the layout never shows a broken image.
 */
export default function Portrait({ src, name }) {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <div className="portrait">
      {failed || !src ? (
        <div className="portrait__fallback" aria-hidden="true">
          <span>{initials}</span>
        </div>
      ) : (
        <img
          className="portrait__img"
          src={src}
          alt={`Portrait of ${name}`}
          onError={() => setFailed(true)}
        />
      )}
      <span className="portrait__ring" aria-hidden="true" />
    </div>
  );
}
