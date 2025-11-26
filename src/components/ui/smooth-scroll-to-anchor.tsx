
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function SmoothScrollToAnchor() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        // Use a timeout to ensure the page has finished rendering and user sees top first
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 800);
      }
    } else {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          // Use a timeout to ensure the page has finished rendering
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, [pathname, searchParams]);

  return null;
}
