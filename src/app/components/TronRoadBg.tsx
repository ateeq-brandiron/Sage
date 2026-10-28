// Tron-style road perspective background
// Vanishing point positioned right-of-center for cinematic depth
// VP = (1050, 200), road spans full bottom width

const VP = { x: 1050, y: 200 };

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function lerpPt(near: { x: number; y: number }, t: number) {
  return { x: lerp(near.x, VP.x, t), y: lerp(near.y, VP.y, t) };
}

const RL_NEAR = { x: -100, y: 680 };
const RR_NEAR = { x: 620, y: 680 };

function roadWidth(t: number) {
  const l = lerpPt(RL_NEAR, t);
  const r = lerpPt(RR_NEAR, t);
  return r.x - l.x;
}
function roadCenterX(t: number) {
  const l = lerpPt(RL_NEAR, t);
  const r = lerpPt(RR_NEAR, t);
  return (l.x + r.x) / 2;
}
function roadCenterY(t: number) {
  return lerpPt(RL_NEAR, t).y; // both sides same y by lerp
}

// Center dashes
const DASH_TS = [0.06, 0.16, 0.27, 0.38, 0.50, 0.61, 0.71, 0.80, 0.87, 0.93, 0.97];
const dashes = DASH_TS.map((t) => {
  const t2 = Math.min(t + 0.04 * (1 - t), 0.99);
  const hw1 = roadWidth(t) * 0.038;
  const hw2 = roadWidth(t2) * 0.038;
  const cx1 = roadCenterX(t); const cy1 = roadCenterY(t);
  const cx2 = roadCenterX(t2); const cy2 = roadCenterY(t2);
  return `M${cx1 - hw1},${cy1} L${cx1 + hw1},${cy1} L${cx2 + hw2},${cy2} L${cx2 - hw2},${cy2} Z`;
});

// Perspective grid — lateral lines converging to VP
const gridLinesLeft = [
  { x: -400, y: 680 }, { x: -250, y: 680 }, { x: -100, y: 680 },
  { x: -550, y: 740 }, { x: -350, y: 740 }, { x: -150, y: 740 },
].map(s => `M${s.x},${s.y} L${VP.x},${VP.y}`);

const gridLinesRight = [
  { x: 620, y: 680 }, { x: 800, y: 680 }, { x: 1000, y: 680 }, { x: 1200, y: 680 }, { x: 1440, y: 650 },
  { x: 620, y: 740 }, { x: 870, y: 740 }, { x: 1120, y: 740 }, { x: 1370, y: 740 },
].map(s => `M${s.x},${s.y} L${VP.x},${VP.y}`);

// Transverse lines across full floor
const transverseLines = [0.12, 0.25, 0.38, 0.52, 0.64, 0.75, 0.84, 0.91, 0.96].map(t => {
  const lPt = lerpPt(RL_NEAR, t);
  const rPt = lerpPt(RR_NEAR, t);
  const ext = (rPt.x - lPt.x) * 0.9;
  return `M${lPt.x - ext},${lPt.y} L${rPt.x + ext * 0.7},${rPt.y}`;
});

// Road polygon
const roadPoly = [
  `${RL_NEAR.x},${RL_NEAR.y}`,
  `${RR_NEAR.x},${RR_NEAR.y}`,
  `${VP.x + 3},${VP.y}`,
  `${VP.x - 3},${VP.y}`,
].join(' ');

const roadEdgeL = `M${RL_NEAR.x},${RL_NEAR.y} L${VP.x},${VP.y}`;
const roadEdgeR = `M${RR_NEAR.x},${RR_NEAR.y} L${VP.x},${VP.y}`;

// Dollar sign post markers — scale with depth
const dollarTs = [0.10, 0.22, 0.35, 0.49, 0.62, 0.73, 0.83, 0.91];
const dollarMarkersRight = dollarTs.map(t => {
  const pt = lerpPt(RR_NEAR, t);
  return { x: pt.x, y: pt.y, postH: 55 * (1 - t * 0.78), r: 12 * (1 - t * 0.68), t };
});
const dollarMarkersLeft = dollarTs.map(t => {
  const pt = lerpPt(RL_NEAR, t);
  return { x: pt.x, y: pt.y, postH: 55 * (1 - t * 0.78), r: 12 * (1 - t * 0.68), t };
});

// Vehicle — low-profile futuristic car at t=0.22 on road center
const VT = 0.22;
const VCX = roadCenterX(VT);
const VCY = roadCenterY(VT);
const VS = 1 - VT * 0.45; // perspective scale
// car dims at natural scale
const CAR_W = 130;
const CAR_H = 28;
const COCKPIT_H = 18;

export function TronRoadBg({ variant = 'dark' }: { variant?: 'dark' | 'green' }) {
  const gridColor = '#00E87A';
  const edgeColor = '#00FFB0';
  const vehColor = '#00FFEE';
  const bgMid   = variant === 'green' ? '#061A0D' : '#06101E';
  const bgDark  = variant === 'green' ? '#020D06' : '#030810';

  // Scaled car dimensions
  const cw = CAR_W * VS;
  const ch = CAR_H * VS;
  const cockH = COCKPIT_H * VS;
  const cx = VCX;
  const cy = VCY - ch * 0.5 - 2 * VS;

  // Car body path — wedge shape, low at front (right), higher at rear (left)
  const carBody = `
    M${cx - cw * 0.5},${cy + ch}
    L${cx + cw * 0.5},${cy + ch}
    L${cx + cw * 0.45},${cy + ch * 0.25}
    L${cx + cw * 0.1},${cy}
    L${cx - cw * 0.3},${cy}
    L${cx - cw * 0.5},${cy + ch * 0.4}
    Z
  `;
  // Cockpit bubble on top
  const cockpitPath = `
    M${cx - cw * 0.28},${cy}
    Q${cx - cw * 0.05},${cy - cockH} ${cx + cw * 0.08},${cy}
    Z
  `;
  // Wheel shapes
  const wheelR = ch * 0.38;
  const wFrontX = cx + cw * 0.36;
  const wRearX  = cx - cw * 0.35;
  const wY      = cy + ch;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1440 680"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sky / background */}
          <radialGradient id="tron-bg" cx="72%" cy="30%" r="80%">
            <stop offset="0%"   stopColor="#0D1F3A" />
            <stop offset="50%"  stopColor={bgMid} />
            <stop offset="100%" stopColor={bgDark} />
          </radialGradient>

          {/* Horizon bloom */}
          <radialGradient id="tron-horizon" cx="73%" cy="29%" r="28%">
            <stop offset="0%"   stopColor="#00FFB0" stopOpacity="0.45" />
            <stop offset="35%"  stopColor="#00C87A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#00C853" stopOpacity="0" />
          </radialGradient>

          {/* Road surface — dark asphalt with subtle teal tint */}
          <linearGradient id="tron-road" x1="0" y1="1" x2="0.8" y2="0">
            <stop offset="0%"   stopColor="#080F1C" />
            <stop offset="60%"  stopColor="#06111A" />
            <stop offset="100%" stopColor="#040C14" />
          </linearGradient>

          {/* Road centre streak */}
          <linearGradient id="tron-centre-streak" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={edgeColor} stopOpacity="0.08" />
            <stop offset="100%" stopColor={edgeColor} stopOpacity="0.22" />
          </linearGradient>

          {/* Edge glow — multi-pass */}
          <filter id="tron-edge-glow" x="-30%" y="-300%" width="160%" height="700%">
            <feGaussianBlur stdDeviation="4" result="b1" />
            <feGaussianBlur stdDeviation="10" result="b2" in="SourceGraphic" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Grid line glow */}
          <filter id="tron-grid-glow" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Marker / post glow */}
          <filter id="tron-marker-glow" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="4" result="b1" />
            <feGaussianBlur stdDeviation="9" result="b2" in="SourceGraphic" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Vehicle neon glow */}
          <filter id="tron-veh-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="7"  result="b1" />
            <feGaussianBlur stdDeviation="18" result="b2" in="SourceGraphic" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Vignette */}
          <radialGradient id="tron-vignette" cx="50%" cy="50%" r="68%">
            <stop offset="45%" stopColor="transparent" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.65" />
          </radialGradient>

          {/* Top fade for text readability */}
          <linearGradient id="tron-topfade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#000" stopOpacity="0.60" />
            <stop offset="40%"  stopColor="#000" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>

          {/* Dash white gradient */}
          <linearGradient id="tron-dash" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#fff" stopOpacity="0.4" />
            <stop offset="50%"  stopColor="#fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.4" />
          </linearGradient>

          {/* Vehicle body gradient */}
          <linearGradient id="tron-car-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0A2020" />
            <stop offset="100%" stopColor="#020E0E" />
          </linearGradient>

          {/* Light trail behind vehicle */}
          <linearGradient id="tron-trail-l" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%"   stopColor={vehColor} stopOpacity="0.5" />
            <stop offset="100%" stopColor={vehColor} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="tron-trail-r" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor={vehColor} stopOpacity="0.5" />
            <stop offset="100%" stopColor={vehColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ── 1. Background sky ── */}
        <rect x="0" y="0" width="1440" height="680" fill="url(#tron-bg)" />

        {/* ── 2. Horizon atmospheric bloom ── */}
        <ellipse cx={VP.x} cy={VP.y} rx="500" ry="240" fill="url(#tron-horizon)" />
        {/* Secondary tight bloom */}
        <ellipse cx={VP.x} cy={VP.y} rx="140" ry="70" fill={edgeColor} opacity="0.06" />

        {/* ── 3. Floor grid ── */}
        <g filter="url(#tron-grid-glow)">
          {/* Left lateral lines */}
          <g opacity="0.22">
            {gridLinesLeft.map((d, i) => (
              <path key={`gl${i}`} d={d} stroke={gridColor} strokeWidth="0.8" fill="none" />
            ))}
          </g>
          {/* Right lateral lines */}
          <g opacity="0.22">
            {gridLinesRight.map((d, i) => (
              <path key={`gr${i}`} d={d} stroke={gridColor} strokeWidth="0.8" fill="none" />
            ))}
          </g>
          {/* Transverse lines — brighter near horizon */}
          {transverseLines.map((d, i) => (
            <path key={`gt${i}`} d={d} stroke={gridColor} strokeWidth="0.6" fill="none"
              opacity={0.10 + i * 0.025} />
          ))}
        </g>

        {/* ── 4. Road surface ── */}
        <polygon points={roadPoly} fill="url(#tron-road)" opacity="0.97" />

        {/* Road centre subtle teal sheen */}
        <polygon
          points={[
            `${roadCenterX(0) - roadWidth(0)*0.18},${roadCenterY(0)}`,
            `${roadCenterX(0) + roadWidth(0)*0.18},${roadCenterY(0)}`,
            `${VP.x + 1},${VP.y}`,
            `${VP.x - 1},${VP.y}`,
          ].join(' ')}
          fill="url(#tron-centre-streak)"
        />

        {/* ── 5. Center dashes ── */}
        {dashes.map((d, i) => (
          <path key={`dash${i}`} d={d} fill="url(#tron-dash)" opacity={0.8 - i * 0.055} />
        ))}

        {/* ── 6. Road edge glow lines (3-pass: wide halo → mid glow → sharp core) ── */}
        <path d={roadEdgeL} stroke={edgeColor} strokeWidth="18" fill="none" opacity="0.07" filter="url(#tron-edge-glow)" />
        <path d={roadEdgeR} stroke={edgeColor} strokeWidth="18" fill="none" opacity="0.07" filter="url(#tron-edge-glow)" />
        <path d={roadEdgeL} stroke={edgeColor} strokeWidth="5"  fill="none" opacity="0.40" filter="url(#tron-edge-glow)" />
        <path d={roadEdgeR} stroke={edgeColor} strokeWidth="5"  fill="none" opacity="0.40" filter="url(#tron-edge-glow)" />
        <path d={roadEdgeL} stroke={edgeColor} strokeWidth="1.8" fill="none" opacity="1" />
        <path d={roadEdgeR} stroke={edgeColor} strokeWidth="1.8" fill="none" opacity="1" />

        {/* ── 7. Dollar sign post markers ── */}
        {/* Right edge */}
        {dollarMarkersRight.map((m, i) => (
          <g key={`dr${i}`} filter="url(#tron-marker-glow)" opacity={0.9 - i * 0.08}>
            {/* Glowing base disc on road */}
            <ellipse cx={m.x} cy={m.y} rx={m.r * 1.4} ry={m.r * 0.35} fill={edgeColor} opacity="0.18" />
            {/* Post */}
            <line x1={m.x} y1={m.y} x2={m.x} y2={m.y - m.postH}
              stroke={edgeColor} strokeWidth={Math.max(1, m.r * 0.25)} />
            {/* Head ring */}
            <circle cx={m.x} cy={m.y - m.postH} r={m.r}
              fill="#001816" stroke={edgeColor} strokeWidth={Math.max(0.8, m.r * 0.22)} />
            {/* Dollar sign */}
            <text x={m.x} y={m.y - m.postH + m.r * 0.42}
              textAnchor="middle"
              fontSize={m.r * 1.15}
              fill={edgeColor}
              fontWeight="900"
              fontFamily="monospace"
            >$</text>
          </g>
        ))}
        {/* Left edge */}
        {dollarMarkersLeft.map((m, i) => (
          <g key={`dl${i}`} filter="url(#tron-marker-glow)" opacity={0.9 - i * 0.08}>
            <ellipse cx={m.x} cy={m.y} rx={m.r * 1.4} ry={m.r * 0.35} fill={edgeColor} opacity="0.18" />
            <line x1={m.x} y1={m.y} x2={m.x} y2={m.y - m.postH}
              stroke={edgeColor} strokeWidth={Math.max(1, m.r * 0.25)} />
            <circle cx={m.x} cy={m.y - m.postH} r={m.r}
              fill="#001816" stroke={edgeColor} strokeWidth={Math.max(0.8, m.r * 0.22)} />
            <text x={m.x} y={m.y - m.postH + m.r * 0.42}
              textAnchor="middle"
              fontSize={m.r * 1.15}
              fill={edgeColor}
              fontWeight="900"
              fontFamily="monospace"
            >$</text>
          </g>
        ))}

        {/* ── 8. Futuristic vehicle ── */}
        <g filter="url(#tron-veh-glow)">
          {/* Light trail lines stretching back (left) from vehicle */}
          <line x1={cx - cw * 0.5} y1={cy + ch * 0.6}
            x2={cx - cw * 0.5 - 220 * VS} y2={cy + ch * 0.65}
            stroke="url(#tron-trail-l)" strokeWidth={3 * VS} />
          <line x1={cx - cw * 0.5} y1={cy + ch * 0.75}
            x2={cx - cw * 0.5 - 140 * VS} y2={cy + ch * 0.78}
            stroke="url(#tron-trail-l)" strokeWidth={2 * VS} />

          {/* Rear under-glow on road */}
          <ellipse cx={cx - cw * 0.15} cy={cy + ch + 2 * VS}
            rx={cw * 0.55} ry={ch * 0.35}
            fill={vehColor} opacity="0.12" />

          {/* Wheels */}
          <ellipse cx={wFrontX} cy={wY} rx={wheelR * 0.55} ry={wheelR}
            fill="#010C0C" stroke={vehColor} strokeWidth={1.5 * VS} />
          <ellipse cx={wRearX}  cy={wY} rx={wheelR * 0.55} ry={wheelR}
            fill="#010C0C" stroke={vehColor} strokeWidth={1.5 * VS} />
          {/* Wheel highlight */}
          <ellipse cx={wFrontX} cy={wY - wheelR * 0.3} rx={wheelR * 0.25} ry={wheelR * 0.2}
            fill={vehColor} opacity="0.25" />
          <ellipse cx={wRearX}  cy={wY - wheelR * 0.3} rx={wheelR * 0.25} ry={wheelR * 0.2}
            fill={vehColor} opacity="0.25" />

          {/* Car body */}
          <path d={carBody} fill="url(#tron-car-body)" />
          {/* Body outline — neon edge */}
          <path d={carBody} fill="none" stroke={vehColor} strokeWidth={1.8 * VS} strokeLinejoin="round" />

          {/* Cockpit */}
          <path d={cockpitPath} fill="#00150F" />
          <path d={cockpitPath} fill="none" stroke={vehColor} strokeWidth={1.4 * VS} />
          {/* Cockpit glass tint */}
          <path d={cockpitPath} fill={vehColor} opacity="0.08" />

          {/* Side panel accent line */}
          <line
            x1={cx - cw * 0.48} y1={cy + ch * 0.55}
            x2={cx + cw * 0.44} y2={cy + ch * 0.4}
            stroke={vehColor} strokeWidth={1.2 * VS} opacity="0.6"
          />
          {/* Rear brake glow */}
          <rect x={cx - cw * 0.5} y={cy + ch * 0.25} width={3 * VS} height={ch * 0.45}
            fill={vehColor} rx={1} />
          {/* Front headlight */}
          <rect x={cx + cw * 0.47} y={cy + ch * 0.3} width={3 * VS} height={ch * 0.35}
            fill={vehColor} rx={1} />
          {/* Headlight beam */}
          <line
            x1={cx + cw * 0.5} y1={cy + ch * 0.45}
            x2={cx + cw * 0.5 + 90 * VS} y2={cy + ch * 0.42}
            stroke={vehColor} strokeWidth={2.5 * VS} opacity="0.3"
          />
        </g>

        {/* ── 9. Vignette ── */}
        <rect x="0" y="0" width="1440" height="680" fill="url(#tron-vignette)" />

        {/* ── 10. Top fade for text legibility ── */}
        <rect x="0" y="0" width="1440" height="320" fill="url(#tron-topfade)" />
      </svg>
    </div>
  );
}
