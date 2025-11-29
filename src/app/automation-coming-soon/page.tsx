'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Cog } from 'lucide-react';

export default function AutomationComingSoonPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 relative"
                >
                    <div className="relative w-24 h-24 flex items-center justify-center bg-white rounded-3xl shadow-xl border border-slate-100">
                        <Cog className="w-12 h-12 text-blue-600 animate-[spin_10s_linear_infinite]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 flex items-center justify-center bg-blue-600 rounded-2xl shadow-lg">
                        <Cog className="w-6 h-6 text-white animate-[spin_8s_linear_infinite_reverse]" />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6"
                >
                    Automation & Drives <br />
                    <span className="text-blue-600">Coming Soon</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl"
                >
                    We are currently building a comprehensive catalog of PLCs, HMIs, AC Drives, and advanced control solutions. Stay tuned for the future of industrial automation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link href="/">
                        <Button size="lg" className="gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
