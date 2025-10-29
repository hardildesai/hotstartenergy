
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function HavellsLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/havells_logo.png"
      alt="Havells Logo"
      width={120}
      height={30}
      className={cn('dark:invert', className)}
    />
  );
}
