// Vanishing point: VP = (1100, 190)
// Road near edge: bottom-left ~(−60, 620), bottom-right ~(560, 620)
// Road far edge: converges to VP

const VP = { x: 1100, y: 190 };

// Interpolate a point between near and vanishing point
function lerpPt(near: { x: number; y: number }, t: number) {
  return {
    x: near.x + (VP.x - near.x) * t,
    y: near.y + (VP.y - near.y) * t,
  };
}

// Road left/right near points
const RL_NEAR = { x: -60, y: 620 };
const RR_NEAR = { x: 560, y: 620 };

// Dash center between left and right edge at t
function dashCenter(t: number) {
  const l = lerpPt(RL_NEAR, t);
  const r = lerpPt(RR_NEAR, t);
  return { x: (l.x + r.x) / 2, y: (l.y + r.y) / 2 };
}
function dashHalfWidth(t: number) {
  const l = lerpPt(RL_NEAR, t);
  const r = lerpPt(RR_NEAR, t);
  return (r.x - l.x) * 0.04;
}

// Generate dashes along center line
const DASH_TS = [0.08, 0.18, 0.30, 0.42, 0.54, 0.64, 0.73, 0.81, 0.88, 0.93, 0.97];
const dashes = DASH_TS.map((t) => {
  const t2 = Math.min(t + 0.045 * (1 - t), 0.99);
  const c1 = dashCenter(t);
  const c2 = dashCenter(t2);
  const hw1 = dashHalfWidth(t);
  const hw2 = dashHalfWidth(t2);
  return `M${c1.x - hw1},${c1.y} L${c1.x + hw1},${c1.y} L${c2.x + hw2},${c2.y} L${c2.x - hw2},${c2.y} Z`;
});

// Grid lines — converging to VP from the floor
// Left floor: from far-left edge converging to VP
// Right floor: from far-right edge converging to VP
function gridLinesLeft() {
  const starts = [
    { x: -300, y: 620 }, { x: -180, y: 620 }, { x: -60, y: 620 }, // near left
    { x: 0, y: 680 }, { x: -120, y: 680 }, { x: -240, y: 680 }, { x: -360, y: 680 },
  ];
  return starts.map((s) => `M${s.x},${s.y} L${VP.x},${VP.y}`);
}

function gridLinesRight() {
  const starts = [
    { x: 560, y: 620 }, { x: 720, y: 620 }, { x: 900, y: 620 },
    { x: 1100, y: 620 }, { x: 1300, y: 620 }, { x: 1440, y: 580 },
    { x: 560, y: 680 }, { x: 800, y: 680 }, { x: 1050, y: 680 }, { x: 1300, y: 680 },
  ];
  return starts.map((s) => `M${s.x},${s.y} L${VP.x},${VP.y}`);
}

// Transverse grid lines (crossing the floor perpendicular to road direction)
function transverseLines() {
  const ts = [0.15, 0.30, 0.45, 0.58, 0.70, 0.80, 0.88, 0.94];
  return ts.map((t) => {
    const lPt = lerpPt(RL_NEAR, t);
    const rPt = lerpPt(RR_NEAR, t);
    // extend beyond road edges
    const leftExt = { x: lPt.x - (rPt.x - lPt.x) * 0.6, y: lPt.y };
    const rightExt = { x: rPt.x + (rPt.x - lPt.x) * 0.8, y: rPt.y };
    return `M${leftExt.x},${leftExt.y} L${rightExt.x},${rightExt.y}`;
  });
}

// Glowing marker dots along road edges
const markerTs = [0.10, 0.22, 0.36, 0.50, 0.63, 0.74, 0.84, 0.91];
const markersLeft = markerTs.map((t) => {
  const pt = lerpPt(RL_NEAR, t);
  const size = 18 * (1 - t * 0.7);
  return { x: pt.x, y: pt.y, r: size };
});
const markersRight = markerTs.map((t) => {
  const pt = lerpPt(RR_NEAR, t);
  const size = 18 * (1 - t * 0.7);
  return { x: pt.x, y: pt.y, r: size };
});

// Road polygon
const roadPoly = [
  `${RL_NEAR.x},${RL_NEAR.y}`,
  `${RR_NEAR.x},${RR_NEAR.y}`,
  `${VP.x + 2},${VP.y}`,
  `${VP.x - 2},${VP.y}`,
].join(' ');

// Road edge lines (left and right)
const roadEdgeL = `M${RL_NEAR.x},${RL_NEAR.y} L${VP.x},${VP.y}`;
const roadEdgeR = `M${RR_NEAR.x},${RR_NEAR.y} L${VP.x},${VP.y}`;

export function TronRoadBg({ variant = 'dark' }: { variant?: 'dark' | 'green' }) {
  const gridColor = variant === 'green' ? '#00FF88' : '#00C853';
  const edgeColor = variant === 'green' ? '#00FF88' : '#00FF88';
  const bgFrom = variant === 'green' ? '#0D2A1A' : '#060D1A';
  const bgTo = variant === 'green' ? '#041208' : '#030810';

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1440 620"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Background gradient */}
          <radialGradient id="tron-bg" cx="65%" cy="35%" r="75%">
            <stop offset="0%" stopColor={bgFrom} />
            <stop offset="60%" stopColor={variant === 'green' ? '#061A0D' : '#080F1E'} />
            <stop offset="100%" stopColor={bgTo} />
          </radialGradient>

          {/* Horizon glow */}
          <radialGradient id="tron-horizon" cx="76%" cy="31%" r="30%">
            <stop offset="0%" stopColor="#00C8A0" stopOpacity="0.55" />
            <stop offset="40%" stopColor="#00A87A" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#00C853" stopOpacity="0" />
          </radialGradient>

          {/* Road surface gradient */}
          <linearGradient id="tron-road" x1="0" y1="1" x2="0.76" y2="0">
            <stop offset="0%" stopColor="#0A1020" />
            <stop offset="70%" stopColor="#090E1C" />
            <stop offset="100%" stopColor="#060A14" />
          </linearGradient>

          {/* Edge glow filter */}
          <filter id="tron-edge-glow" x="-20%" y="-200%" width="140%" height="600%">
            <feGaussianBlur stdDeviation="3.5" result="blur1" />
            <feGaussianBlur stdDeviation="8" result="blur2" in="SourceGraphic" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Marker glow filter */}
          <filter id="tron-marker-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Subtle glow for grid */}
          <filter id="tron-grid-glow" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Vignette */}
          <radialGradient id="tron-vignette" cx="50%" cy="50%" r="70%">
            <stop offset="50%" stopColor="transparent" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.6" />
          </radialGradient>

          {/* Dash gradient */}
          <linearGradient id="tron-dash" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
          </linearGradient>

          {/* Light streak along road */}
          <linearGradient id="tron-streak" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={gridColor} stopOpacity="0" />
            <stop offset="30%" stopColor={gridColor} stopOpacity="0.6" />
            <stop offset="70%" stopColor={gridColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={gridColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. Background */}
        <rect x="0" y="0" width="1440" height="620" fill="url(#tron-bg)" />

        {/* 2. Horizon atmospheric glow */}
        <ellipse cx={VP.x} cy={VP.y} rx="420" ry="220" fill="url(#tron-horizon)" />

        {/* 3. Perspective floor grid — converging lines */}
        <g filter="url(#tron-grid-glow)" opacity="0.18">
          {/* Lateral lines — left side */}
          {gridLinesLeft().map((d, i) => (
            <path key={`gl${i}`} d={d} stroke={gridColor} strokeWidth="0.6" fill="none" />
          ))}
          {/* Lateral lines — right side */}
          {gridLinesRight().map((d, i) => (
            <path key={`gr${i}`} d={d} stroke={gridColor} strokeWidth="0.6" fill="none" />
          ))}
          {/* Transverse crossing lines */}
          {transverseLines().map((d, i) => (
            <path key={`gt${i}`} d={d} stroke={gridColor} strokeWidth="0.5" fill="none" opacity="0.7" />
          ))}
        </g>

        {/* 4. Road surface */}
        <polygon points={roadPoly} fill="url(#tron-road)" opacity="0.95" />

        {/* Road inner subtle sheen */}
        <polygon points={roadPoly} fill="none" stroke={gridColor} strokeWidth="0.3" opacity="0.08" />

        {/* 5. Center dashes */}
        {dashes.map((d, i) => (
          <path key={`dash${i}`} d={d} fill="url(#tron-dash)" opacity={0.75 - i * 0.05} />
        ))}

        {/* 6. Road edge glow lines */}
        {/* Outer wide glow */}
        <path d={roadEdgeL} stroke={edgeColor} strokeWidth="12" fill="none" opacity="0.08" filter="url(#tron-edge-glow)" />
        <path d={roadEdgeR} stroke={edgeColor} strokeWidth="12" fill="none" opacity="0.08" filter="url(#tron-edge-glow)" />
        {/* Mid glow */}
        <path d={roadEdgeL} stroke={edgeColor} strokeWidth="4" fill="none" opacity="0.35" filter="url(#tron-edge-glow)" />
        <path d={roadEdgeR} stroke={edgeColor} strokeWidth="4" fill="none" opacity="0.35" filter="url(#tron-edge-glow)" />
        {/* Sharp core line */}
        <path d={roadEdgeL} stroke={edgeColor} strokeWidth="1.5" fill="none" opacity="0.95" />
        <path d={roadEdgeR} stroke={edgeColor} strokeWidth="1.5" fill="none" opacity="0.95" />

        {/* 7. Glowing marker dots — left edge */}
        {markersLeft.map((m, i) => (
          <g key={`ml${i}`} filter="url(#tron-marker-glow)">
            <circle cx={m.x} cy={m.y} r={m.r * 2.5} fill={gridColor} opacity="0.05" />
            <circle cx={m.x} cy={m.y} r={m.r} fill={gridColor} opacity="0.15" />
            <circle cx={m.x} cy={m.y} r={m.r * 0.45} fill={gridColor} opacity="0.7" />
            <circle cx={m.x} cy={m.y} r={m.r * 0.18} fill="#CFFFEF" opacity="0.95" />
          </g>
        ))}
        {/* Glowing marker dots — right edge */}
        {markersRight.map((m, i) => (
          <g key={`mr${i}`} filter="url(#tron-marker-glow)">
            <circle cx={m.x} cy={m.y} r={m.r * 2.5} fill={gridColor} opacity="0.05" />
            <circle cx={m.x} cy={m.y} r={m.r} fill={gridColor} opacity="0.15" />
            <circle cx={m.x} cy={m.y} r={m.r * 0.45} fill={gridColor} opacity="0.7" />
            <circle cx={m.x} cy={m.y} r={m.r * 0.18} fill="#CFFFEF" opacity="0.95" />
          </g>
        ))}

        {/* 8. Light streak along road left edge */}
        <line
          x1={RL_NEAR.x} y1={RL_NEAR.y}
          x2={VP.x} y2={VP.y}
          stroke="url(#tron-streak)" strokeWidth="6" opacity="0.25"
        />

        {/* 9. Vignette overlay */}
        <rect x="0" y="0" width="1440" height="620" fill="url(#tron-vignette)" />

        {/* 10. Top dark fade so text is readable */}
        <defs>
          <linearGradient id="tron-topfade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#000" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="1440" height="300" fill="url(#tron-topfade)" />
      </svg>
    </div>
  );
}
