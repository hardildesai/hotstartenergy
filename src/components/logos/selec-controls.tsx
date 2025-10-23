import { cn } from '@/lib/utils';

export function SelecControlsLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-white', className)}
      width="150"
      height="30"
      viewBox="0 0 150 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.5 15C12.5 8.6 7.4 3.5 1 3.5v-1C8.5 2.5 14.5 8.1 14.5 15h-2zm-11.5 0C1 21.4 6 26.5 12.5 26.5v1C5.5 27.5 -1 21.9 -1 15h2z" />
      <path d="M15 15L27 3.5h-2L15 13 3 3.5H1L15 15z" />
      <path d="M15 15L3 26.5h2L15 17l12 9.5h2L15 15z" />
      <path d="M30 3.5h12v23H30zm2 2v19h8V5.5h-8z" />
      <path d="M45 26.5V3.5h12v5h-10v5h8v5h-8v6.5h10v5H45z" />
      <path d="M60 26.5V3.5h12v23H60zm2-2v-19h8v19h-8z" />
      <path d="M75 15c0-6.9 5.6-12.5 12.5-12.5S100 8.1 100 15s-5.6 12.5-12.5 12.5S75 21.9 75 15zm2 0c0 5.8 4.7 10.5 10.5 10.5s10.5-4.7 10.5-10.5S93.3 4.5 87.5 4.5 77 9.2 77 15z" />
      <path d="M103 26.5V3.5h12v5h-10v16.5h10v5h-12z" />
      <path d="M118 26.5V3.5h12v5h-10v5h8v5h-8v6.5h10v5h-12z" />
      <path d="M133 26.5V3.5h12v23h-12zm2-2v-19h8v19h-8z" />
    </svg>
  );
}