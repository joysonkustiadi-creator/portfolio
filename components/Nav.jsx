"use client";

import { useEffect, useState } from "react";

/**
 * Fixed top bar. Gains a background and a hairline border once the page
 * has scrolled, so it reads as floating over the hero and as a solid bar
 * everywhere else.
 */
export default function Nav({ initials, links, status }) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${stuck ? " is-stuck" : ""}`}>
      <div className="nav__inner shell">
        <a className="nav__mark display" href="#top">
          {initials}
          <span className="nav__dot">.</span>
        </a>

        <ul className="nav__links">
          {links.map((link) => (
            <li key={link.href}>
              <a className="nav__link mono" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <span className="nav__status mono">
          <span className="nav__pulse" aria-hidden="true" />
          {status}
        </span>
      </div>
    </nav>
  );
}
