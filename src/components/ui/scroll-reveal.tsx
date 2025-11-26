"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    duration?: number;
    stagger?: number;
}

export function ScrollReveal({
    children,
    className = "",
    direction = "up",
    delay = 0,
    duration = 1,
    stagger = 0,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const el = ref.current;
            if (!el) return;

            let x = 0;
            let y = 0;

            switch (direction) {
                case "up":
                    y = 50;
                    break;
                case "down":
                    y = -50;
                    break;
                case "left":
                    x = 50;
                    break;
                case "right":
                    x = -50;
                    break;
            }

            gsap.fromTo(
                el.children,
                {
                    opacity: 0,
                    x,
                    y,
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: duration,
                    stagger: stagger,
                    delay: delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        },
        { scope: ref }
    );

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

