import { cn } from '@/lib/utils';

export function AdaniLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-white', className)}
      width="100"
      height="30"
      viewBox="0 0 100 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.5 30L0 0h8.8l6.3 15.8L21.3 0h8.8L17.5 30zM35 30V0h25v7.5h-17.5v3.8h15V19h-15v3.5h17.5V30zM65 30V0h7.5l10 15V0h7.5v30h-7.5l-10-15v15zM92.5 30V0h7.5v30z" />
    </svg>
  );
}