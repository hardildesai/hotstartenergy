"use client";

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FlowButton({ text = "Modern Button", href }: { text?: string, href: string }) {
  return (
    <Link href={href} passHref>
      <button className="group relative flex items-center gap-1 overflow-hidden rounded-full border border-input bg-transparent px-6 py-2 text-sm font-semibold text-foreground transition-all duration-300 ease-in-out hover:border-transparent hover:text-primary-foreground hover:bg-primary active:scale-95">
        {/* Left arrow */}
        <ArrowRight
          className="absolute w-4 h-4 left-[-25%] stroke-foreground fill-none z-10 group-hover:left-4 group-hover:stroke-primary-foreground transition-all duration-500 ease-in-out"
        />
        {/* Text */}
        <span className="relative z-10 -translate-x-3 group-hover:translate-x-3 transition-transform duration-500 ease-in-out">
          {text}
        </span>
        {/* Circle */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-500 ease-in-out"></span>
        {/* Right arrow */}
        <ArrowRight
          className="absolute w-4 h-4 right-4 stroke-foreground fill-none z-10 group-hover:right-[-25%] group-hover:stroke-primary-foreground transition-all duration-500 ease-in-out"
        />
      </button>
    </Link>
  );
}
