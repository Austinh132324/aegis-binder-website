import { useEffect, useState } from 'react';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

const WIDTHS: Record<Breakpoint, number> = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
};

function resolve(width: number): Breakpoint {
  if (width <= WIDTHS.sm) return 'sm';
  if (width <= WIDTHS.md) return 'md';
  if (width <= WIDTHS.lg) return 'lg';
  return 'xl';
}

export function useBreakpoint(): Breakpoint {
  const initial =
    typeof window !== 'undefined' ? resolve(window.innerWidth) : 'xl';
  const [bp, setBp] = useState<Breakpoint>(initial);

  useEffect(() => {
    const onResize = () => setBp(resolve(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return bp;
}
