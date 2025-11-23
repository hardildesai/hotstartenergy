'use client';

import React, { useRef } from 'react';
import { motion, useInView, UseInViewOptions, Variants } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    variants?: Variants;
    delay?: number;
    duration?: number;
    viewport?: UseInViewOptions;
}

export function ScrollReveal({
    children,
    className,
    variants,
    delay = 0,
    duration = 0.5,
    viewport = { once: true, margin: "-100px" },
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

    const defaultVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants || defaultVariants}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
