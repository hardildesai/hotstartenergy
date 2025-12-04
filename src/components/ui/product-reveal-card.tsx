"use client"

import { motion, useReducedMotion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { ShoppingCart, ExternalLink, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ProductRevealCardProps {
  name?: string
  price?: string
  originalPrice?: string
  image?: string
  description?: string
  rating?: number
  reviewCount?: number
  onAdd?: () => void
  onViewDetails?: (e: React.MouseEvent) => void;
  enableAnimations?: boolean
  className?: string
  features?: { title: string; subtitle: string }[];
  category: string;
  imageFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export function ProductRevealCard({
  name = "Premium Product",
  image = "/placeholder.svg",
  description,
  onAdd,
  onViewDetails,
  enableAnimations = true,
  className,
  category,
  imageFit = "cover",
}: ProductRevealCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const shouldAnimate = enableAnimations && !shouldReduceMotion

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onAdd?.();
  }

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails?.(e);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col h-full overflow-hidden rounded-3xl",
        "bg-white/5 backdrop-blur-md border border-white/10 shadow-xl",
        "hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 ease-out",
        "dark:bg-black/20 dark:border-white/5",
        className
      )}
    >
      {/* Glass Reflection Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

      {/* Image Section */}
      <div className={cn("relative aspect-[4/3] overflow-hidden p-2", imageFit === 'contain' && "bg-white/5")}>
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <motion.img
            src={image}
            alt={name}
            className={cn(
              "h-full w-full transition-transform duration-700 ease-out group-hover:scale-110",
              imageFit === "contain" ? "object-contain" : "object-cover"
            )}
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white/90 shadow-sm">
              {category}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col flex-grow px-6 pb-6 pt-2">
        <div className="mb-3">
          <h3 className="font-bold text-xl leading-tight text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2" title={name}>
            {name}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground/80 line-clamp-3 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Actions Footer */}
        <div className="flex items-center gap-3 mt-auto">
          <button
            onClick={handleViewDetails}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl",
              "bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 transition-all duration-300",
              "border border-secondary/20 hover:border-secondary/40"
            )}
          >
            Details
          </button>
          <button
            onClick={handleAddToCart}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl",
              "bg-primary text-primary-foreground shadow-lg shadow-primary/25",
              "hover:bg-primary/90 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300",
              "group/btn"
            )}
          >
            <span className="hidden sm:inline">Enquire</span>
            <span className="sm:hidden">Enquire</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
