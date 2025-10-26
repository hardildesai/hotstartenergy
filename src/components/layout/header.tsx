"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem, BrandItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Logo } from "../logo";
import Link from "next/link";
import { FlowButton } from "../ui/flow-button";
import { productCategories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { brands } from "@/lib/brands";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-2 inset-x-0 max-w-5xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div onMouseLeave={() => setActive(null)}>
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <HoveredLink href="/">Home</HoveredLink>
          <HoveredLink href="/about">About Us</HoveredLink>
          <Link href="/products" onMouseEnter={() => setActive('Products')}>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                {productCategories.map((category) => {
                  const image = PlaceHolderImages.find(p => p.id === category.imageId);
                  return (
                    <ProductItem
                      key={category.id}
                      title={category.title}
                      href={`/products?category=${category.id}`}
                      src={image?.imageUrl || ''}
                      description={category.description}
                    />
                  )
                })}
              </div>
            </MenuItem>
          </Link>
          <div onMouseEnter={() => setActive('Brands')}>
            <MenuItem setActive={setActive} active={active} item="Brands">
              <div className="grid grid-cols-4 w-[40rem] gap-px overflow-hidden rounded-lg border bg-background shadow-lg">
                {brands.map((brand, index) => (
                  <BrandItem
                    key={brand.id}
                    name={brand.name}
                    href={`/brands/${brand.slug}`}
                    logo={brand.logo}
                    className="border-0 rounded-none"
                  />
                ))}
              </div>
            </MenuItem>
          </div>
          <HoveredLink href="/career">Career</HoveredLink>
        </div>
        <FlowButton text="Contact Us" href="/contact" />
      </Menu>
    </div>
  );
}

export function Header() {
  return <Navbar />;
}
