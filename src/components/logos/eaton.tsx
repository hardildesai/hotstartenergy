import { cn } from '@/lib/utils';
import Image from 'next/image';

export function EatonLogo({ className }: { className?: string }) {
  return (
    <Image
      src="https://logo.clearbit.com/eaton.com"
      alt="Eaton Logo"
      width={100}
      height={30}
      className={cn('dark:invert', className)}
    />
  );
}
