import { cn } from '@/lib/utils';
import Image from 'next/image';

export function LegrandLogo({ className }: { className?: string }) {
  return (
    <Image
      src="https://www.legrand.com/themes/custom/legrand_ecat/logo.svg"
      alt="Legrand Logo"
      width={120}
      height={30}
      className={cn('dark:invert', className)}
    />
  );
}
