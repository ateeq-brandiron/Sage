import type { ReactNode } from 'react';

function TM() {
  return <sup className="tm">™</sup>;
}

export function RevenueStorm() {
  return <>RevenueStorm<TM /></>;
}

/** Splits a string on ™ and wraps each symbol with the styled <sup>. */
export function renderTM(text: string): ReactNode {
  const parts = text.split('™');
  if (parts.length === 1) return text;
  return parts.flatMap((part, i) =>
    i < parts.length - 1 ? [part, <TM key={i} />] : [part]
  );
}
