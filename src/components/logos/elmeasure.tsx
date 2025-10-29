
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function ElmeasureLogo({ className }: { className?: string }) {
  return (
    <Image
      src="https://logo.clearbit.com/elmeasure.com"
      alt="Elmeasure Logo"
      width={150}
      height={30}
      className={cn('dark:invert', className)}
    />
  );
}
