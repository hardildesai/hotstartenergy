"use client";
import React from "react";
import { motion } from "framer-motion";
import { Construction } from "lucide-react";
import Image from "next/image";

export function ComingSoon({ brandName, brandLogo }: { brandName: string; brandLogo: string }) {
    return (
        <div className="min-h-screen w-full bg-white relative overflow-hidden flex items-center justify-center p-4 md:p-8">

            {/* Background Grid & Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Content Section */}
                <div className="space-y-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium tracking-wider uppercase">
                            <Construction className="w-4 h-4" />
                            <span>Work in Progress</span>
                        </div>

                        <div className="h-24 relative w-64">
                            <Image
                                src={brandLogo}
                                alt={`${brandName} logo`}
                                fill
                                className="object-contain object-left"
                            />
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                            Coming Soon
                        </h2>

                        <p className="text-xl text-slate-500 max-w-lg leading-relaxed border-l-2 border-slate-200 pl-6">
                            We are currently wiring up the complete catalog for {brandName}. Our engineers are ensuring every product specification is accurate and ready for deployment.
                        </p>
                    </div>
                </div>

                {/* Visual Section */}
                <div className="relative h-full min-h-[500px] flex items-center justify-center">
                    {/* Circuit Animation Container */}
                    <div className="relative w-full max-w-lg aspect-square">

                        {/* Central Hub */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center z-20 shadow-xl">
                            <div className="relative w-24 h-24">
                                <Image
                                    src={brandLogo}
                                    alt={`${brandName} logo`}
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                        </div>

                        {/* Rotating Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-dashed border-slate-200 rounded-full z-10"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-slate-100 rounded-full z-10"
                        />

                        {/* Orbiting Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 z-10"
                        >
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-400 rounded-full shadow-lg flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                        </motion.div>

                        {/* Circuit Lines */}
                        <svg className="absolute inset-0 w-full h-full z-0 opacity-20" viewBox="0 0 400 400">
                            <motion.path
                                d="M200,200 L350,100 L400,100"
                                fill="none"
                                stroke="#94a3b8"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M200,200 L50,300 L0,300"
                                fill="none"
                                stroke="#94a3b8"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
                            />
                            <motion.path
                                d="M200,200 L100,50 L100,0"
                                fill="none"
                                stroke="#94a3b8"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
