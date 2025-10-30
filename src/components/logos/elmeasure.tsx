import { cn } from '@/lib/utils';

export function ElmeasureLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-gray-800', className)}
      width="140"
      height="25"
      viewBox="0 0 140 25"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 25V0h14.7v5H6.3v5.5h7.3v4.8H6.3v4.7h8.7V25H0z" />
      <path d="M18.7 25V0h6.3v25h-6.3z" />
      <path d="M28.9 25V0h12.8c4.2 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5h-6.5v10h-6.3zm12.8-9.8c1.3 0 2.4-1.1 2.4-2.4s-1.1-2.4-2.4-2.4H35v4.8h6.7z" />
      <path d="M53.1 25V0h14.7v5H59.4v5.5h7.3v4.8H59.4v4.7h8.7V25h-15z" />
      <path d="M72.2 25V0h6.3l9.8 11.4V0h6.3v25h-6.3l-9.8-11.4V25h-6.3z" />
      <path d="M98.6 25V0h14.7v5h-8.4v5.5h7.3v4.8h-7.3v4.7h8.7V25h-15z" />
      <path d="M117.7 25V0h12.8c4.2 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5h-6.5v10h-6.3zm12.8-9.8c1.3 0 2.4-1.1 2.4-2.4s-1.1-2.4-2.4-2.4h-6.5v4.8h6.5z" />
    </svg>
  );
}
