"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades and lifts its children the first time they enter the viewport.
 *
 * Starts visible if IntersectionObserver is unavailable, so content is
 * never hidden by a failed script.
 */
export default function Reveal({ children, delay = 0, as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
