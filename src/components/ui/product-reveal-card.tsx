
"use client"

import { motion, useReducedMotion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { ShoppingCart, Star, Heart, ExternalLink } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { DialogTrigger } from "./dialog"
import Link from "next/link"

interface ProductRevealCardProps {
  name?: string
  price?: string
  originalPrice?: string
  image?: string
  description?: string
  rating?: number
  reviewCount?: number
  onAdd?: () => void
  onFavorite?: () => void
  onViewDetails?: () => void;
  enableAnimations?: boolean
  className?: string
  features?: { title: string; subtitle: string }[];
  category: string;
}

export function ProductRevealCard({
  name = "Premium Wireless Headphones",
  price,
  originalPrice,
  image = "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=600&fit=crop", // Premium headphones
  description = "Experience studio-quality sound with advanced noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  rating = 4.8,
  reviewCount = 124,
  onAdd,
  onFavorite,
  onViewDetails,
  enableAnimations = true,
  className,
  features,
  category,
}: ProductRevealCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const shouldAnimate = enableAnimations && !shouldReduceMotion

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsFavorite(!isFavorite)
    onFavorite?.()
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onAdd?.();
  }
  
  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onViewDetails?.();
  }


  const containerVariants = {
    rest: { 
      scale: 1,
      y: 0,
      filter: "blur(0px)",
    },
    hover: shouldAnimate ? { 
      scale: 1.03, 
      y: -8,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        mass: 0.8,
      }
    } : {},
  }

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  }

  const overlayVariants = {
    rest: { 
      y: "100%", 
      opacity: 0,
      filter: "blur(4px)",
    },
    hover: { 
      y: "0%", 
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.6,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const contentVariants = {
    rest: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
    },
    hover: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5,
      },
    },
  }

  const buttonVariants_motion = {
    rest: { scale: 1, y: 0 },
    hover: shouldAnimate ? { 
      scale: 1.05, 
      y: -2,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 25 
      }
    } : {},
    tap: shouldAnimate ? { scale: 0.95 } : {},
  }

  const favoriteVariants = {
    rest: { scale: 1, rotate: 0 },
    favorite: { 
      scale: [1, 1.3, 1], 
      rotate: [0, 10, -10, 0],
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    },
  }

  return (
    <motion.div
      data-slot="product-reveal-card"
      initial="rest"
      whileHover="hover"
      variants={containerVariants}
      className={cn(
        "relative rounded-2xl border border-border/50 bg-card text-card-foreground overflow-hidden",
        "shadow-lg shadow-black/5 cursor-pointer group h-full",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        <motion.img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          variants={imageVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        
        {/* Favorite Button */}
        <motion.button
          onClick={handleFavorite}
          variants={favoriteVariants}
          animate={isFavorite ? "favorite" : "rest"}
          className={cn(
            "absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm border border-white/20",
            isFavorite 
              ? "bg-red-500 text-white" 
              : "bg-white/20 text-white hover:bg-white/30"
          )}
        >
          <Heart className={cn("w-4 h-4", isFavorite && "fill-current")} />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">

        <p className="text-xs text-muted-foreground">{category}</p>

        {/* Product Info */}
        <div className="space-y-1">
          <motion.h3 
            className="text-md font-bold leading-tight tracking-tight line-clamp-2"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.h3>
          
        </div>
      </div>

      {/* Reveal Overlay */}
      <motion.div
        variants={overlayVariants}
        className="absolute inset-0 bg-background/96 backdrop-blur-xl flex flex-col"
      >
        <div className="p-4 pt-3 flex-grow flex flex-col overflow-hidden space-y-3">
          <motion.div variants={contentVariants}>
            <h3 className="font-bold text-lg">{name}</h3>
          </motion.div>
          
          <motion.div variants={contentVariants} className="flex-grow overflow-y-auto pr-2">
            <h4 className="font-semibold mb-1 text-sm">Product Details</h4>
            <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {description}
            </p>
          </motion.div>
        </div>

        <div className="p-4 pt-0 mt-auto">
            <motion.div variants={contentVariants} className="flex items-center gap-2">
                <motion.button
                onClick={handleAddToCart}
                variants={buttonVariants_motion}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className={cn(
                    buttonVariants({ variant: "default", size: "sm" }), 
                    "w-full h-9 font-medium text-sm",
                    "bg-gradient-to-r from-primary to-primary/90",
                    "hover:from-primary/90 hover:to-primary",
                    "shadow-lg shadow-primary/25"
                )}
                >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Enquire
                </motion.button>
                
                <DialogTrigger asChild>
                    <motion.button
                    onClick={handleViewDetails}
                    variants={buttonVariants_motion}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }), 
                        "w-full h-9 font-medium text-sm"
                    )}
                    >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                    </motion.button>
                </DialogTrigger>
            </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

    