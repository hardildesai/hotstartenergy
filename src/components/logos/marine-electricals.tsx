import { cn } from '@/lib/utils';

export function MarineElectricalsLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-white', className)}
      width="180"
      height="30"
      viewBox="0 0 180 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 30V0h8l10 18V0h8v30h-8L8 12v18H0z" />
      <path d="M30 30V0h12c8.3 0 15 6.7 15 15s-6.7 15-15 15H30zm8-22v14h4c4.1 0 7.5-3.1 7.5-7s-3.4-7-7.5-7h-4z" />
      <path d="M60 30V0h8l6 12V0h8v30h-8l-6-12v12h-8z" />
      <path d="M85 30V0h8v30h-8z" />
      <path dM100 30V0h12c8.3 0 15 6.7 15 15s-6.7 15-15 15h-12zm8-22v14h4c4.1 0 7.5-3.1 7.5-7s-3.4-7-7.5-7h-4z" />
      <path d="M130 30V0h8v12h12V0h8v30h-8V18h-12v12h-8z" />
      <path d="M160 30V0h8v12h12V0h8v30h-8V18h-12v12h-8z" />
    </svg>
  );
}