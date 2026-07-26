"use client";

/**
 * The signature element.
 *
 * Reads two ways on purpose: a mountain ridge, and a metric curve.
 * Projects are ordered oldest to newest, so left-to-right is also a
 * timeline - the ridge is the climb so far.
 *
 * Every peak is a real project and its height comes from that project's
 * `elevation` value, so the graphic cannot drift out of sync with the
 * work below it.
 */

const VIEW_W = 1000;
const VIEW_H = 270;
const BASE_Y = 226;
const TOP_Y = 44;

function peakY(elevation) {
  return BASE_Y - (elevation / 100) * (BASE_Y - TOP_Y);
}

export default function Ridgeline({ projects }) {
  const peaks = projects.map((project, i) => ({
    ...project,
    x: ((i + 1) / (projects.length + 1)) * VIEW_W,
    y: peakY(project.elevation),
  }));

  // Ridge path: sea level, up to each peak via a saddle, back out to the edge.
  const points = [[0, BASE_Y]];
  peaks.forEach((peak, i) => {
    const previousX = i === 0 ? 0 : peaks[i - 1].x;
    const previousY = i === 0 ? BASE_Y : peaks[i - 1].y;
    const saddleY = Math.max(previousY, peak.y) + (BASE_Y - Math.max(previousY, peak.y)) * 0.42;
    points.push([(previousX + peak.x) / 2, saddleY]);
    points.push([peak.x, peak.y]);
  });
  points.push([VIEW_W, BASE_Y]);

  const line = points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} ${VIEW_W},${VIEW_H} 0,${VIEW_H}`;

  // One year tick per distinct year, placed under its first project.
  const seenYears = new Set();

  return (
    <svg
      className="ridge"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      role="img"
      aria-label="A ridgeline running left to right in time. Each peak is one project."
    >
      <defs>
        <linearGradient id="ridgeFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--dawn)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--dawn)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[0.25, 0.5, 0.75].map((t) => (
        <line
          key={t}
          className="ridge__grid"
          x1="0"
          x2={VIEW_W}
          y1={BASE_Y - t * (BASE_Y - TOP_Y)}
          y2={BASE_Y - t * (BASE_Y - TOP_Y)}
        />
      ))}

      <line className="ridge__base" x1="0" x2={VIEW_W} y1={BASE_Y} y2={BASE_Y} />

      <polygon className="ridge__fill" points={area} />
      {/* pathLength normalises the stroke to 1 unit, so the draw-on
          animation always completes no matter how many projects the
          ridge has. Without it, adding projects makes the path longer
          than the dash array and the tail never finishes drawing. */}
      <polyline className="ridge__track" points={line} pathLength="1" />
      <polyline className="ridge__line" points={line} pathLength="1" />
      <polyline className="ridge__pulse" points={line} pathLength="1" />
      

      {peaks.map((peak, i) => {
        const showYear = !seenYears.has(peak.year);
        seenYears.add(peak.year);
        return (
          <g key={peak.id}>
            {showYear && (
              <text className="ridge__year" x={peak.x} y={BASE_Y + 22} textAnchor="middle">
                {peak.year}
              </text>
            )}
            <a
              href={`#${peak.id}`}
              className="ridge__peak"
              style={{ animationDelay: `${800 + i * 120}ms` }}
              aria-label={`Jump to ${peak.name}`}
            >
              <circle className="ridge__halo" cx={peak.x} cy={peak.y} r="4" />
              <circle className="ridge__dot" cx={peak.x} cy={peak.y} r="4" />
              <text
                className="ridge__label"
                x={peak.x}
                y={peak.y - (i % 2 === 0 ? 15 : 30)}
                textAnchor="middle"
              >
                {peak.short || peak.name}
              </text>
              <circle className="ridge__hit" cx={peak.x} cy={peak.y} r="22" />
            </a>
          </g>
        );
      })}
    </svg>
  );
}
