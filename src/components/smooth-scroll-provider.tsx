'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // how long scroll takes (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out
      smoothWheel: true,
      smoothTouch: false, // keep touch scrolling natural
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
