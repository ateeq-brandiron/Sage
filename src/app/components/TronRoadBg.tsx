// Tron road — matches reference image:
// dot-grid floor, barrel vehicle, $ post markers, strong neon edge streaks
// Vanishing point left-of-center to match perspective in reference

const VP = { x: 820, y: 210 };

function lerpPt(near: { x: number; y: number }, t: number) {
  return {
    x: near.x + (VP.x - near.x) * t,
    y: near.y + (VP.y - near.y) * t,
  };
}

// Road edges — road runs from lower-left to upper-right VP
const RL_NEAR = { x: 80,  y: 680 };
const RR_NEAR = { x: 680, y: 680 };

function roadCx(t: number) {
  return (lerpPt(RL_NEAR, t).x + lerpPt(RR_NEAR, t).x) / 2;
}
function roadCy(t: number) { return lerpPt(RL_NEAR, t).y; }
function roadW(t: number)  { return lerpPt(RR_NEAR, t).x - lerpPt(RL_NEAR, t).x; }

// Center dashes
const DASH_TS = [0.04, 0.13, 0.23, 0.34, 0.46, 0.57, 0.67, 0.76, 0.84, 0.90, 0.95, 0.98];
const dashes = DASH_TS.map(t => {
  const t2 = Math.min(t + 0.038 * (1 - t), 0.99);
  const hw1 = roadW(t) * 0.036; const hw2 = roadW(t2) * 0.036;
  const cx1 = roadCx(t); const cy1 = roadCy(t);
  const cx2 = roadCx(t2); const cy2 = roadCy(t2);
  return `M${cx1-hw1},${cy1} L${cx1+hw1},${cy1} L${cx2+hw2},${cy2} L${cx2-hw2},${cy2} Z`;
});

// Road polygon
const roadPoly = [
  `${RL_NEAR.x},${RL_NEAR.y}`,
  `${RR_NEAR.x},${RR_NEAR.y}`,
  `${VP.x+3},${VP.y}`,
  `${VP.x-3},${VP.y}`,
].join(' ');

const roadEdgeL = `M${RL_NEAR.x},${RL_NEAR.y} L${VP.x},${VP.y}`;
const roadEdgeR = `M${RR_NEAR.x},${RR_NEAR.y} L${VP.x},${VP.y}`;

// Dot grid floor — rows of dots converging to VP
function dotGrid() {
  const dots: { x: number; y: number; r: number }[] = [];
  // Rows at different depths
  const rows = [
    { y: 700, xs: [-400,-320,-240,-160,-80, 0, 80, 780, 880, 980, 1080, 1180, 1280, 1380], r: 2.8 },
    { y: 660, xs: [-360,-270,-180,-90,  0, 90, 680, 770, 860, 950, 1040, 1130, 1220, 1310], r: 2.2 },
    { y: 620, xs: [-310,-230,-150,-70,  0, 620, 700, 790, 880, 970, 1060, 1150], r: 1.7 },
    { y: 580, xs: [-260,-190,-120,-50, 0,  560, 640, 720, 800, 880, 960, 1040], r: 1.3 },
    { y: 545, xs: [-210,-150,-90,-30,  0,  510, 580, 650, 720, 800, 870], r: 1.0 },
    { y: 515, xs: [-160,-110,-60,      0,  470, 530, 600, 665, 730], r: 0.8 },
    { y: 488, xs: [-120,-80,-40,       0,  440, 495, 550, 610], r: 0.6 },
    { y: 464, xs: [-90,-55,-22,        0,  410, 460, 510], r: 0.5 },
    { y: 443, xs: [-65,-35,            0,  385, 428], r: 0.4 },
    { y: 426, xs: [-45,-20,            0,  363], r: 0.32 },
    { y: 410, xs: [-28,                0,  342], r: 0.25 },
  ];
  rows.forEach(row => {
    row.xs.forEach(x => dots.push({ x, y: row.y, r: row.r }));
  });
  return dots;
}
const floorDots = dotGrid();

// Dollar sign post markers along road edges
const dollarTs = [0.06, 0.18, 0.31, 0.45, 0.58, 0.70, 0.80, 0.89];
const dollarMarkersRight = dollarTs.map(t => {
  const pt = lerpPt(RR_NEAR, t);
  return { x: pt.x, y: pt.y, postH: 62*(1-t*0.78), r: 14*(1-t*0.70), t };
});
const dollarMarkersLeft = dollarTs.map(t => {
  const pt = lerpPt(RL_NEAR, t);
  return { x: pt.x, y: pt.y, postH: 62*(1-t*0.78), r: 14*(1-t*0.70), t };
});

// Vehicle — two connected binocular barrels at t=0.18 on road center
const VT = 0.18;
const VCX = roadCx(VT);
const VCY = roadCy(VT);
const VS  = 1 - VT * 0.42;

export function TronRoadBg({ variant = 'dark' }: { variant?: 'dark' | 'green' }) {
  const neon    = '#00FF9A';
  const neonBright = '#80FFCC';
  const vehNeon = '#00FFEE';

  // Barrel vehicle dims
  const bR  = 22 * VS;  // barrel radius (height/2)
  const bW  = 48 * VS;  // barrel length
  const gap = 12 * VS;  // gap between barrels
  const bCY = VCY - bR - 6 * VS;
  const bCX1 = VCX - gap / 2 - bW / 2; // left barrel cx
  const bCX2 = VCX + gap / 2 + bW / 2; // right barrel cx

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1440 680"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sky */}
          <linearGradient id="tron-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#020E1A" />
            <stop offset="55%"  stopColor="#041420" />
            <stop offset="100%" stopColor="#061C18" />
          </linearGradient>

          {/* Horizon bloom */}
          <radialGradient id="tron-horizon" cx={`${VP.x/1440*100}%`} cy={`${VP.y/680*100}%`} r="35%">
            <stop offset="0%"   stopColor="#00FFB0" stopOpacity="0.55" />
            <stop offset="30%"  stopColor="#00C87A" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#00C853" stopOpacity="0" />
          </radialGradient>

          {/* Road asphalt */}
          <linearGradient id="tron-road" x1="0.3" y1="1" x2="0.7" y2="0">
            <stop offset="0%"   stopColor="#060E18" />
            <stop offset="100%" stopColor="#040A12" />
          </linearGradient>

          {/* Edge neon glow */}
          <filter id="edge-glow" x="-40%" y="-400%" width="180%" height="900%">
            <feGaussianBlur stdDeviation="5"  result="b1" />
            <feGaussianBlur stdDeviation="14" result="b2" in="SourceGraphic" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Post / marker glow */}
          <filter id="post-glow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="5"  result="b1" />
            <feGaussianBlur stdDeviation="12" result="b2" in="SourceGraphic" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Vehicle neon glow */}
          <filter id="veh-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8"  result="b1" />
            <feGaussianBlur stdDeviation="22" result="b2" in="SourceGraphic" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Dot glow */}
          <filter id="dot-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="1.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Vignette */}
          <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
            <stop offset="40%" stopColor="transparent" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.70" />
          </radialGradient>

          {/* Top text fade */}
          <linearGradient id="top-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#000" stopOpacity="0.65" />
            <stop offset="42%" stopColor="#000" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>

          {/* Dash gradient */}
          <linearGradient id="dash-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#fff" stopOpacity="0.35" />
            <stop offset="50%"  stopColor="#fff" stopOpacity="0.90" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.35" />
          </linearGradient>

          {/* Vehicle barrel gradient (front-lit) */}
          <radialGradient id="barrel-grad" cx="35%" cy="35%" r="65%">
            <stop offset="0%"   stopColor="#004030" />
            <stop offset="100%" stopColor="#000E08" />
          </radialGradient>
        </defs>

        {/* ── 1. Sky ── */}
        <rect x="0" y="0" width="1440" height="680" fill="url(#tron-sky)" />

        {/* ── 2. Horizon glow ── */}
        <ellipse cx={VP.x} cy={VP.y} rx="560" ry="280" fill="url(#tron-horizon)" />
        <ellipse cx={VP.x} cy={VP.y} rx="120" ry="55"  fill={neon} opacity="0.08" />

        {/* ── 3. Dot grid floor (left & right of road) ── */}
        <g filter="url(#dot-glow)">
          {floorDots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={neon} opacity="0.55" />
          ))}
        </g>

        {/* ── 4. Road surface ── */}
        <polygon points={roadPoly} fill="url(#tron-road)" />

        {/* ── 5. Center dashes ── */}
        {dashes.map((d, i) => (
          <path key={i} d={d} fill="url(#dash-grad)" opacity={0.85 - i * 0.055} />
        ))}

        {/* ── 6. Road edge — thick neon streaks ── */}
        {/* Wide outer halo */}
        <path d={roadEdgeL} stroke={neon} strokeWidth="22" fill="none" opacity="0.10" filter="url(#edge-glow)" />
        <path d={roadEdgeR} stroke={neon} strokeWidth="22" fill="none" opacity="0.10" filter="url(#edge-glow)" />
        {/* Mid glow */}
        <path d={roadEdgeL} stroke={neon} strokeWidth="7"  fill="none" opacity="0.50" filter="url(#edge-glow)" />
        <path d={roadEdgeR} stroke={neon} strokeWidth="7"  fill="none" opacity="0.50" filter="url(#edge-glow)" />
        {/* Bright core */}
        <path d={roadEdgeL} stroke={neonBright} strokeWidth="2" fill="none" opacity="1" />
        <path d={roadEdgeR} stroke={neonBright} strokeWidth="2" fill="none" opacity="1" />

        {/* ── 7. Dollar sign post markers ── */}
        {/* Right edge */}
        {dollarMarkersRight.map((m, i) => (
          <g key={`dr${i}`} filter="url(#post-glow)" opacity={Math.max(0.25, 1 - i * 0.09)}>
            {/* Glow disc on road surface */}
            <ellipse cx={m.x} cy={m.y} rx={m.r * 2} ry={m.r * 0.5} fill={neon} opacity="0.22" />
            {/* Vertical post */}
            <line x1={m.x} y1={m.y} x2={m.x} y2={m.y - m.postH}
              stroke={neon} strokeWidth={Math.max(1.2, m.r * 0.28)} />
            {/* Head ring */}
            <circle cx={m.x} cy={m.y - m.postH} r={m.r}
              fill="#001410" stroke={neon} strokeWidth={Math.max(1, m.r * 0.25)} />
            {/* $ glyph */}
            <text x={m.x} y={m.y - m.postH + m.r * 0.42}
              textAnchor="middle" fontSize={m.r * 1.2}
              fill={neonBright} fontWeight="900" fontFamily="monospace">$</text>
          </g>
        ))}
        {/* Left edge */}
        {dollarMarkersLeft.map((m, i) => (
          <g key={`dl${i}`} filter="url(#post-glow)" opacity={Math.max(0.25, 1 - i * 0.09)}>
            <ellipse cx={m.x} cy={m.y} rx={m.r * 2} ry={m.r * 0.5} fill={neon} opacity="0.22" />
            <line x1={m.x} y1={m.y} x2={m.x} y2={m.y - m.postH}
              stroke={neon} strokeWidth={Math.max(1.2, m.r * 0.28)} />
            <circle cx={m.x} cy={m.y - m.postH} r={m.r}
              fill="#001410" stroke={neon} strokeWidth={Math.max(1, m.r * 0.25)} />
            <text x={m.x} y={m.y - m.postH + m.r * 0.42}
              textAnchor="middle" fontSize={m.r * 1.2}
              fill={neonBright} fontWeight="900" fontFamily="monospace">$</text>
          </g>
        ))}

        {/* ── 8. Vehicle — binocular barrel shape ── */}
        <g filter="url(#veh-glow)">
          {/* Light trail streaming behind (to the left) */}
          <rect
            x={bCX1 - bW/2 - 180*VS} y={bCY - 3*VS}
            width={180*VS} height={6*VS}
            fill="none"
            style={{ background: 'none' }}
          />
          <line x1={bCX1 - bW/2} y1={bCY}
            x2={bCX1 - bW/2 - 200*VS} y2={bCY + 2*VS}
            stroke={vehNeon} strokeWidth={4*VS} opacity="0.5"
            strokeLinecap="round" />
          <line x1={bCX1 - bW/2} y1={bCY - bR*0.3}
            x2={bCX1 - bW/2 - 130*VS} y2={bCY - bR*0.25}
            stroke={vehNeon} strokeWidth={2*VS} opacity="0.3"
            strokeLinecap="round" />
          <line x1={bCX1 - bW/2} y1={bCY + bR*0.3}
            x2={bCX1 - bW/2 - 130*VS} y2={bCY + bR*0.35}
            stroke={vehNeon} strokeWidth={2*VS} opacity="0.3"
            strokeLinecap="round" />

          {/* Under-glow on road */}
          <ellipse cx={VCX} cy={VCY} rx={bW*1.1} ry={bR*0.55}
            fill={vehNeon} opacity="0.18" />

          {/* Left barrel */}
          <rect x={bCX1-bW/2} y={bCY-bR} width={bW} height={bR*2}
            rx={bR} fill="url(#barrel-grad)" />
          <rect x={bCX1-bW/2} y={bCY-bR} width={bW} height={bR*2}
            rx={bR} fill="none" stroke={vehNeon} strokeWidth={2*VS} />
          {/* Left barrel inner highlight */}
          <rect x={bCX1-bW/2+4*VS} y={bCY-bR+4*VS} width={bW-8*VS} height={bR*0.5}
            rx={bR*0.5} fill={vehNeon} opacity="0.18" />
          {/* Left barrel front lens */}
          <circle cx={bCX1+bW/2-4*VS} cy={bCY} r={bR*0.45}
            fill={vehNeon} opacity="0.35" />
          <circle cx={bCX1+bW/2-4*VS} cy={bCY} r={bR*0.22}
            fill={vehNeon} opacity="0.85" />

          {/* Right barrel */}
          <rect x={bCX2-bW/2} y={bCY-bR} width={bW} height={bR*2}
            rx={bR} fill="url(#barrel-grad)" />
          <rect x={bCX2-bW/2} y={bCY-bR} width={bW} height={bR*2}
            rx={bR} fill="none" stroke={vehNeon} strokeWidth={2*VS} />
          {/* Right barrel inner highlight */}
          <rect x={bCX2-bW/2+4*VS} y={bCY-bR+4*VS} width={bW-8*VS} height={bR*0.5}
            rx={bR*0.5} fill={vehNeon} opacity="0.18" />
          {/* Right barrel front lens */}
          <circle cx={bCX2+bW/2-4*VS} cy={bCY} r={bR*0.45}
            fill={vehNeon} opacity="0.35" />
          <circle cx={bCX2+bW/2-4*VS} cy={bCY} r={bR*0.22}
            fill={vehNeon} opacity="0.85" />

          {/* Bridge connecting two barrels */}
          <rect x={bCX1+bW/2} y={bCY-bR*0.28} width={gap} height={bR*0.56}
            fill={vehNeon} opacity="0.7" rx={2} />

          {/* Headlight beam forward */}
          <line x1={bCX2+bW/2} y1={bCY}
            x2={bCX2+bW/2+80*VS} y2={bCY-3*VS}
            stroke={vehNeon} strokeWidth={3*VS} opacity="0.4"
            strokeLinecap="round" />
          <line x1={bCX2+bW/2} y1={bCY}
            x2={bCX2+bW/2+120*VS} y2={bCY-5*VS}
            stroke={vehNeon} strokeWidth={1.5*VS} opacity="0.2"
            strokeLinecap="round" />
        </g>

        {/* ── 9. Vignette ── */}
        <rect x="0" y="0" width="1440" height="680" fill="url(#vignette)" />

        {/* ── 10. Top fade ── */}
        <rect x="0" y="0" width="1440" height="320" fill="url(#top-fade)" />
      </svg>
    </div>
  );
}
