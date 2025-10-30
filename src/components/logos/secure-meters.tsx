import { cn } from '@/lib/utils';
import Image from 'next/image';

export function SecureMetersLogo({ className }: { className?: string }) {
  return (
    <Image
      src="https://logo.clearbit.com/securemeters.com"
      alt="Secure Meters Logo"
      width={150}
      height={30}
      className={cn('dark:invert', className)}
    />
  );
}
