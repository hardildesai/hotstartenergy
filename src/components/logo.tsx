import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2 font-bold', className)}>
      <Image src="/navbar_logo.png" alt="Hotstart Energy Logo" width={180} height={40} className="h-10 w-auto" />
    </div>
  );
}
