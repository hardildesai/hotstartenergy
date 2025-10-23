import { cn } from '@/lib/utils';

export function AtlasCopcoLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-white', className)}
      width="160"
      height="30"
      viewBox="0 0 160 30"
      fill="currentColor"
      xmlns="http://wwwdocker.com/2000/svg"
    >
      <path d="M12 0L0 20h7l5-10 5 10h7L12 0zM25 30V0h8v30h-8z" />
      <path d="M40 30V0h8l6 12V0h8v30h-8l-6-12v12h-8z" />
      <path d="M65 30V0h12c8.3 0 15 6.7 15 15s-6.7 15-15 15H65zm8-22v14h4c4.1 0 7.5-3.1 7.5-7s-3.4-7-7.5-7h-4z" />
      <path d="M95 15C95 6.7 101.7 0 110 0s15 6.7 15 15-6.7 15-15 15-15-6.7-15-15zm8 0c0 4.1 3.4 7.5 7 7.5s7-3.4 7-7.5-3.1-7.5-7-7.5-7 3.4-7 7.5z" />
      <path d="M130 30V0h8v12h12V0h8v30h-8V18h-12v12h-8z" />
    </svg>
  );
}