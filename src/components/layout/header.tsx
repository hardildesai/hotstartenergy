"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Logo } from "../logo";
import Link from "next/link";
import { FlowButton } from "../ui/flow-button";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-2 inset-x-0 max-w-7xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <HoveredLink href="/">Home</HoveredLink>
              <HoveredLink href="/about">About Us</HoveredLink>
              <MenuItem setActive={setActive} active={active} item="Products">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="MV Switchgear"
                    href="/products/mv-switchgear-01"
                    src="https://images.unsplash.com/photo-1581092919534-89cda27c1d63?q=80&w=1770&auto=format&fit=crop"
                    description="Robust and reliable MV switchgear for primary distribution networks."
                  />
                  <ProductItem
                    title="LV Power Panel"
                    href="/products/lv-panel-01"
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1769&auto=format&fit=crop"
                    description="A modular low voltage panel for commercial and industrial applications."
                  />
                  <ProductItem
                    title="Legrand Arteor"
                    href="/products/legrand-arteor-switch"
                    src="https://images.unsplash.com/photo-1543443376-49a3a1d28a38?q=80&w=1827&auto=format&fit=crop"
                    description="A stylish and intelligent switch that can be controlled via smartphone."
                  />
                  <ProductItem
                    title="Automation Hub"
                    href="/products/home-automation-hub-01"
                    src="https://images.unsplash.com/photo-1596732382442-793a8904f4f3?q=80&w=1770&auto=format&fit=crop"
                    description="The central brain of your smart home, connecting all your devices."
                  />
                </div>
              </MenuItem>
              <HoveredLink href="/career">Career</HoveredLink>
            </div>
            <FlowButton text="Contact Us" href="/contact" />
        </div>
      </Menu>
    </div>
  );
}

export function Header() {
  return <Navbar />;
}
