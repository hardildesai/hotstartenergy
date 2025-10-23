import { cn } from '@/lib/utils';

export function SecureMetersLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-white', className)}
      width="150"
      height="30"
      viewBox="0 0 150 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.5 15c0-6.9 5.6-12.5 12.5-12.5S37.5 8.1 37.5 15 31.9 27.5 25 27.5 12.5 21.9 12.5 15zm23-10.5c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5 10.5-4.7 10.5-10.5S31.3 4.5 25.5 4.5z" />
      <path d="M40 27.5V4.5h12v5h-10v5h8v5h-8v8h10v5H40z" />
      <path dM55 15c0-6.9 5.6-12.5 12.5-12.5S80 8.1 80 15s-5.6 12.5-12.5 12.5S55 21.9 55 15zm23-10.5c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5 10.5-4.7 10.5-10.5S73.8 4.5 68 4.5z" />
      <path d="M83 27.5V4.5h12v5h-10v18h-2z" />
      <path d="M98 27.5V4.5h12v23h-12zm2-2v-19h8v19h-8z" />
      <path d="M113 27.5V4.5h12v5h-10v5h8v5h-8v8h10v5h-12z" />
      <path d="M128 27.5V4.5h12v23h-12zm2-2v-19h8v19h-8z" />
      <path d="M143 27.5V4.5h12v5h-10v18h-2z" />
    </svg>
  );
}