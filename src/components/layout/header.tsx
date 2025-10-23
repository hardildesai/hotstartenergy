'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Menu } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'translate-y-0 bg-background/80 backdrop-blur-sm border-b'
          : '-translate-y-full bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center">
        <div className="mr-8 flex items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-white">
            <Logo className="h-8 w-auto text-accent" />
            <span className="text-lg sr-only">Hotstart Energy</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'text-neutral-300 transition-colors hover:text-white',
                pathname === href ? 'text-white font-semibold' : ''
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 md:hidden">
           <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background">
              <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsSheetOpen(false)}>
                 <Logo className="h-8 w-auto text-accent" />
              </Link>
              <div className="mt-8 flex flex-col gap-4">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsSheetOpen(false)}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-foreground/80',
                      pathname === href ? 'text-foreground' : 'text-foreground/60'
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
