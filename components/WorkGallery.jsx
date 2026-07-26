"use client";

import { useState } from "react";

/**
 * Screenshot slot for a project. Takes any number of images.
 *
 * One image  -> a single panel, no thumbnails.
 * Several    -> a large panel plus a clickable thumbnail strip.
 * None       -> a labelled placeholder, so an unfinished entry still
 *               looks deliberate rather than broken.
 */
export default function WorkGallery({ images = [], name, id }) {
  const [active, setActive] = useState(0);
  const [broken, setBroken] = useState({});

  const usable = images.filter((_, i) => !broken[i]);

  if (usable.length === 0) {
    return (
      <div className="shot shot--empty">
        <span className="mono">public/work/{id}-1.png</span>
      </div>
    );
  }

  const current = images[active] ?? images[0];

  return (
    <div className="gallery">
      <div className="shot">
        <img
          className="shot__img"
          key={current.src}
          src={current.src}
          alt={current.caption || `${name} screenshot`}
          loading="lazy"
          onError={() => setBroken((prev) => ({ ...prev, [active]: true }))}
        />
      </div>

      {current.caption && <p className="gallery__caption mono">{current.caption}</p>}

      {images.length > 1 && (
        <div className="gallery__strip">
          {images.map((image, i) =>
            broken[i] ? null : (
              <button
                type="button"
                key={image.src}
                className={`thumb${i === active ? " is-active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={image.caption || `View image ${i + 1} of ${name}`}
                aria-current={i === active}
              >
                <img
                  src={image.src}
                  alt=""
                  loading="lazy"
                  onError={() => setBroken((prev) => ({ ...prev, [i]: true }))}
                />
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
