import { cn } from '@/lib/utils';

export function HavellsLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-gray-800', className)}
      width="120"
      height="30"
      viewBox="0 0 120 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h6.6v30H0zM14.8 0h6.6l5 15V0h6.6v30h-6.6l-5-15v15h-6.6zM34.4 0h6.6l5 15V0h6.6v30h-6.6l-5-15v15h-6.6zM60.6 0h6.6v30h-6.6zM71.8 0h17.5v5h-11v20h11v5H71.8zM93.8 15c0-8.3 6.7-15 15-15s15 6.7 15 15-6.7 15-15 15-15-6.7-15-15zm6.6 0c0 4.6 3.8 8.4 8.4 8.4s8.4-3.8 8.4-8.4-3.8-8.4-8.4-8.4-8.4 3.8-8.4 8.4z" />
    </svg>
  );
}
