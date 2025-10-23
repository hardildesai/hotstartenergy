import { cn } from '@/lib/utils';

export function KeiCablesLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-gray-800', className)}
      width="80"
      height="30"
      viewBox="0 0 80 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h6.6v30H0zM14.8 0h6.6L29.6 15 21.4 30h-6.6l5-10.7-5-9.3zM34.4 0h6.6v30h-6.6zM48.8 0h6.6v13.4h10.2V0h6.6v30h-6.6V16.6H55.4V30h-6.6z" />
    </svg>
  );
}
