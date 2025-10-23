import { cn } from '@/lib/utils';

export function CiplaLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-white', className)}
      width="100"
      height="30"
      viewBox="0 0 100 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 15C15 6.7 8.3 0 0 0v30c8.3 0 15-6.7 15-15z" />
      <path d="M25 30V0h8v30h-8z" />
      <path d="M40 30V0h12c8.3 0 15 6.7 15 15s-6.7 15-15 15H40zm8-22v14h4c4.1 0 7.5-3.1 7.5-7s-3.4-7-7.5-7h-4z" />
      <path d="M70 30V0h8v30h-8z" />
      <path d="M85 30V0h12l-10 15 10 15h-12l-4-9-4 9H85z" />
    </svg>
  );
}