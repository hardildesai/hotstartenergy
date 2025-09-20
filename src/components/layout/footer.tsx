import { Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
                Hotstart Energy
            </p>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Hotstart Energy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
