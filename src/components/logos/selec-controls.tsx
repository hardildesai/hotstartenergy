import { cn } from '@/lib/utils';
import Image from 'next/image';

export function SelecControlsLogo({ className }: { className?: string }) {
  return (
    <Image
      src="https://logo.clearbit.com/selec.com"
      alt="Selec Controls Logo"
      width={150}
      height={30}
      className={cn('dark:invert', className)}
    />
  );
}
