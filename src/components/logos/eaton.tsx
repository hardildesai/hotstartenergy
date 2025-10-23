import { cn } from '@/lib/utils';

export function EatonLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-gray-800', className)}
      width="100"
      height="30"
      viewBox="0 0 100 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h17.5v5H6.3v8.5H16v5H6.3v6.5h11.2v5H0zM21.9 0h6.3l7.5 15-7.5 15h-6.3l7.5-15zM39.4 0h17.5v5h-11v20h11v5H39.4zM60.6 0h17.5v5h-11v8.5h9.8v5h-9.8v6.5h11.2v5H60.6zM82.5 0h17.5v5h-11v20h11v5H82.5z" />
    </svg>
  );
}
