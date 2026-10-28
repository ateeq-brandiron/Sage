export function LightLineDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ height: 24, marginTop: flip ? 0 : -1, marginBottom: flip ? -1 : 0 }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 24" preserveAspectRatio="none" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`llg-${flip ? 'b' : 'a'}`} x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="#00C853" stopOpacity="0"/>
            <stop offset="30%"  stopColor="#00C853" stopOpacity="0.5"/>
            <stop offset="50%"  stopColor="#00C853" stopOpacity="1"/>
            <stop offset="70%"  stopColor="#00C853" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#00C853" stopOpacity="0"/>
          </linearGradient>
          <filter id="llglow" x="-20%" y="-200%" width="140%" height="500%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <line
          x1="0" y1="12" x2="1440" y2="12"
          stroke={`url(#llg-${flip ? 'b' : 'a'})`}
          strokeWidth="1.5"
          filter="url(#llglow)"
        />
      </svg>
    </div>
  );
}
