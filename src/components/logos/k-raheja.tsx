import { cn } from '@/lib/utils';

export function KRahejaLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-gray-800', className)}
      width="140"
      height="30"
      viewBox="0 0 140 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h8l10 15L8 30H0l10-15zM20 0h8v30h-8zM30 0h12c8.3 0 15 6.7 15 15s-6.7 15-15 15H30V0zm8 7.5v15h4c4.1 0 7.5-3.4 7.5-7.5S46.1 7.5 42 7.5h-4zM60 0h8v12h10V0h8v30h-8V18H68v12h-8zM90 0h8l10 15L98 30h-8l10-15zM110 0h8v12h10V0h8v30h-8V18h-10v12h-8z" />
    </svg>
  );
}
