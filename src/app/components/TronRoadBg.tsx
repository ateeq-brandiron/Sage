export function TronRoadBg({ variant: _variant = 'dark' }: { variant?: 'dark' | 'green' }) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <img
        src="/images/brand/tron-road-bg.webp"
        alt=""
        className="w-full h-full object-cover object-center"
      />
      {/* Dark overlay so overlaid text stays readable */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
