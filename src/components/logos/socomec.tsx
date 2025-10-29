import { cn } from '@/lib/utils';
import Image from 'next/image';

export function SocomecLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/socomec_logo.png"
      alt="Socomec Logo"
      width={120}
      height={30}
      className={cn('dark:invert', className)}
    />
  );
}
