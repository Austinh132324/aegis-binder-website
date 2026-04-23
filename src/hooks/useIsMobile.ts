import { useEffect, useState } from 'react';

export function useIsMobile(breakpoint = 768): boolean {
  const getMatch = () =>
    typeof window !== 'undefined' ? window.innerWidth <= breakpoint : false;

  const [isMobile, setIsMobile] = useState<boolean>(getMatch);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);

  return isMobile;
}
