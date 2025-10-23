import { cn } from '@/lib/utils';
import { Zap } from 'lucide-react';
import React from 'react';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2 font-bold', className)}>
      <Zap className="h-6 w-6" />
      <span className="text-lg tracking-tight">Hotstart Energy</span>
    </div>
  );
}