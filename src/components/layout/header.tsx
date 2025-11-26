"use client";
import React, { useState } from "react";
import { HoveredLink, MenuItem, ProductItem, BrandItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Logo } from "../logo";
import Link from "next/link";
import { FlowButton } from "../ui/flow-button";
import { productCategories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { brands } from "@/lib/brands";
import { Button } from "../ui/button";
import { Menu as MenuIcon, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

function DesktopNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const getProductCategoryHref = (categoryId: string) => {
    if (categoryId === 'cables-wires') {
      return '/brands/kei-cables';
    }
    if (categoryId === 'lighting-accessories') {
      return '/brands/havells';
    }
    return `/products?category=${categoryId}`;
  };

  return (
    <div
      className={cn("hidden md:flex fixed top-2 inset-x-0 max-w-5xl mx-auto z-50", className)}
    >
      <nav
        onMouseLeave={() => setActive(null)} // resets the state
        className="relative rounded-full border border-transparent dark:bg-black/50 bg-white/80 dark:border-white/[0.2] shadow-input flex justify-between items-center w-full px-8 py-4"
        style={{ backdropFilter: 'url("#container-glass")' }}
      >
        <div onMouseEnter={() => setActive(null)}>
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div onMouseEnter={() => setActive(null)}>
            <HoveredLink href="/">Home</HoveredLink>
          </div>
          <div onMouseEnter={() => setActive(null)}>
            <HoveredLink href="/about">About Us</HoveredLink>
          </div>
          <HoveredLink href="/products">
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                {productCategories.map((category) => {
                  const image = PlaceHolderImages.find(p => p.id === category.imageId);
                  return (
                    <ProductItem
                      key={category.id}
                      title={category.title}
                      href={getProductCategoryHref(category.id)}
                      src={image?.imageUrl || ''}
                      description={category.description}
                      setActive={setActive}
                    />
                  )
                })}
              </div>
            </MenuItem>
          </HoveredLink>
          <MenuItem setActive={setActive} active={active} item={<Link href="/products?section=brands">Brands</Link>} itemKey="Brands">
            <div className="grid grid-cols-4 w-[40rem] gap-px overflow-hidden rounded-lg border bg-background shadow-lg">
              {brands.map((brand) => (
                <BrandItem
                  key={brand.id}
                  name={brand.name}
                  href={`/brands/${brand.slug}`}
                  logo={brand.logo}
                  className="border-0 rounded-none"
                  setActive={setActive}
                />
              ))}
            </div>
          </MenuItem>
          <div onMouseEnter={() => setActive(null)}>
            <HoveredLink href="/career">Career</HoveredLink>
          </div>
        </div>
        <div onMouseEnter={() => setActive(null)}>
          <FlowButton text="Contact Us" href="/contact" />
        </div>
      </nav>
    </div>
  );
}


function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const getProductCategoryHref = (categoryId: string) => {
    if (categoryId === 'cables-wires') {
      return '/brands/kei-cables';
    }
    if (categoryId === 'lighting-accessories') {
      return '/brands/havells';
    }
    return `/products?category=${categoryId}`;
  };

  return (
    <div
      className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 shadow-md"
      style={{ backdropFilter: 'url("#container-glass")' }}
    >
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Logo />
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[340px] p-0">
            <SheetHeader className="p-4 border-b">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <Logo />
              </Link>
            </SheetHeader>
            <div className="p-4">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
                <Accordion type="single" collapsible>
                  <AccordionItem value="products" className="border-b-0">
                    <AccordionTrigger className="text-lg font-medium hover:no-underline py-2">
                      <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <div className="flex flex-col gap-2">
                        {productCategories.map(category => (
                          <Link key={category.id} href={getProductCategoryHref(category.id)} className="block text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>{category.title}</Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="brands" className="border-b-0">
                    <AccordionTrigger className="text-lg font-medium hover:no-underline py-2">Brands</AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <div className="flex flex-col gap-2">
                        {brands.map(brand => (
                          <Link key={brand.id} href={`/brands/${brand.slug}`} className="block text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>{brand.name}</Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link href="/career" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Career</Link>
                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}


export function Header() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}
