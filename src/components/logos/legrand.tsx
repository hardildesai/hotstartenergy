import { cn } from '@/lib/utils';
import Image from 'next/image';

export function LegrandLogo({ className }: { className?: string }) {
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Legrand-logo.svg"
      alt="Legrand Logo"
      width={120}
      height={30}
      className={cn('dark:invert', className)}
    />
  );
}
