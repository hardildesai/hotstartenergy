import { cn } from '@/lib/utils';

export function LegrandLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-white', className)}
      width="120"
      height="30"
      viewBox="0 0 120 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.3 25.5V5.8H18.9V25.5H12.3Z" />
      <path d="M22.3 25.5V5.8H37.8V10H28.9V13.8H36.7V18H28.9V21.3H38.1V25.5H22.3Z" />
      <path d="M41.5 25.5V5.8H48.1V21.5L57.5 5.8H65.3L55.5 21.9L65.7 25.5H57.8L51.8 22.3L48.1 25.5H41.5Z" />
      <path d="M68.7 25.5V5.8H84.2V10H75.3V13.8H83.1V18H75.3V21.3H84.5V25.5H68.7Z" />
      <path d="M87.8 25.5V5.8H94.4V25.5H87.8Z" />
      <path d="M97.9 25.5V5.8H116.8V10H104.5V13.8H113.2V18H104.5V25.5H97.9Z" />
    </svg>
  );
}