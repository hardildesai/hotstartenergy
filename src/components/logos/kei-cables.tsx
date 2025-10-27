import { cn } from '@/lib/utils';
import Image from 'next/image';

export function KeiCablesLogo({ className }: { className?: string }) {
  return (
    <Image
      src="https://logo.clearbit.com/kei-ind.com"
      alt="KEI Cables Logo"
      width={80}
      height={30}
      className={cn('dark:invert', className)}
    />
  );
}
