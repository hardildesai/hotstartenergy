'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LAUNCH_CONFIG } from '@/lib/launch-config';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lock, Unlock, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import Image from 'next/image';
import { verifyOwnerPassword } from '@/app/actions/auth';

interface CountdownOverlayProps {
    onUnlock?: () => void;
}

export function CountdownOverlay({ onUnlock }: CountdownOverlayProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [timeLeft, setTimeLeft] = useState<number>(0);
    const [progress, setProgress] = useState(0);
    const [showLogin, setShowLogin] = useState(false);
    const [password, setPassword] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [sessionTimeLeft, setSessionTimeLeft] = useState<number | null>(null);

    const LOADING_PHRASES = [
        "Crafting the best solutions...",
        "Optimizing for peak performance...",
        "Engineering excellence...",
        "Finalizing system integration...",
        "Preparing for a new era of power...",
        "Calibrating precision instruments...",
        "We are almost there..."
    ];

    useEffect(() => {
        // Check for session access
        const checkSession = () => {
            const storedToken = sessionStorage.getItem(LAUNCH_CONFIG.ACCESS_TOKEN_KEY);
            if (storedToken) {
                const loginTime = parseInt(storedToken, 10);
                const now = Date.now();

                // Check if session is valid and not expired
                if (!isNaN(loginTime) && (now - loginTime < LAUNCH_CONFIG.SESSION_DURATION_MS)) {
                    setIsVisible(false);
                    setSessionTimeLeft(LAUNCH_CONFIG.SESSION_DURATION_MS - (now - loginTime));
                    onUnlock?.(); // Notify parent that we are unlocked
                    return true;
                } else {
                    // Session expired or invalid
                    sessionStorage.removeItem(LAUNCH_CONFIG.ACCESS_TOKEN_KEY);
                    setIsVisible(true);
                    setSessionTimeLeft(null);
                    return false;
                }
            }
            setIsVisible(true);
            setSessionTimeLeft(null);
            return false;
        };

        checkSession();

        const calculateTimeLeft = () => {
            const targetDate = new Date(LAUNCH_CONFIG.TARGET_DATE).getTime();
            const now = Date.now();
            return Math.max(0, targetDate - now);
        };

        const calculateProgress = () => {
            const start = new Date(LAUNCH_CONFIG.CAMPAIGN_START_DATE).getTime();
            const end = new Date(LAUNCH_CONFIG.TARGET_DATE).getTime();
            const now = Date.now();

            if (now >= end) return 100;
            if (now <= start) return 0;

            const totalDuration = end - start;
            const elapsed = now - start;
            return Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
        };

        setTimeLeft(calculateTimeLeft());
        setProgress(calculateProgress());

        const interval = setInterval(() => {
            const remaining = calculateTimeLeft();
            setTimeLeft(remaining);
            setProgress(calculateProgress());

            // Check session expiry and update timer periodically
            const storedToken = sessionStorage.getItem(LAUNCH_CONFIG.ACCESS_TOKEN_KEY);
            if (storedToken) {
                const loginTime = parseInt(storedToken, 10);
                const elapsed = Date.now() - loginTime;

                if (elapsed >= LAUNCH_CONFIG.SESSION_DURATION_MS) {
                    sessionStorage.removeItem(LAUNCH_CONFIG.ACCESS_TOKEN_KEY);
                    setIsVisible(true);
                    setSessionTimeLeft(null);
                    toast.info('Session expired. Please login again.');
                    window.location.reload(); // Force reload to clear DOM
                } else {
                    setSessionTimeLeft(LAUNCH_CONFIG.SESSION_DURATION_MS - elapsed);
                }
            } else {
                setSessionTimeLeft(null);
            }

            if (remaining <= 0) {
                clearInterval(interval);
                setTimeout(() => setIsVisible(false), 500);
                onUnlock?.(); // Unlock when countdown ends
            }
        }, 1000);

        // Rotate phrases every 3 seconds
        const phraseInterval = setInterval(() => {
            setCurrentPhraseIndex((prev) => (prev + 1) % LOADING_PHRASES.length);
        }, 3000);

        return () => {
            clearInterval(interval);
            clearInterval(phraseInterval);
        };
    }, []);



    // ... (inside component)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const result = await verifyOwnerPassword(password);

            if (result.success) {
                // Store current timestamp for session tracking
                const loginTime = Date.now();
                sessionStorage.setItem(LAUNCH_CONFIG.ACCESS_TOKEN_KEY, loginTime.toString());
                setIsVisible(false);
                setSessionTimeLeft(LAUNCH_CONFIG.SESSION_DURATION_MS);
                toast.success('Owner access granted for 5 minutes');
                onUnlock?.(); // Notify parent
            } else {
                toast.error('Invalid password');
            }
        } catch (error) {
            toast.error('Verification failed. Please try again.');
        }
    };

    const formatTime = (ms: number) => {
        const totalSeconds = Math.floor(ms / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const pad = (n: number) => n < 10 ? `0${n}` : n;

        return {
            days: pad(days),
            hours: pad(hours),
            minutes: pad(minutes),
            seconds: pad(seconds)
        };
    };

    const formatSessionTime = (ms: number) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const timeComponents = formatTime(timeLeft);

    return (
        <>
            {/* Session Timer - Visible only when logged in and overlay is hidden */}
            {!isVisible && sessionTimeLeft !== null && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed bottom-4 right-4 z-[90] bg-red-600 text-white px-4 py-2 rounded-full shadow-lg shadow-red-600/20 backdrop-blur-sm border border-red-500 flex items-center gap-2 text-sm font-bold font-mono"
                >
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span>Session: {formatSessionTime(sessionTimeLeft)}</span>
                    <button
                        onClick={() => {
                            sessionStorage.removeItem(LAUNCH_CONFIG.ACCESS_TOKEN_KEY);
                            setIsVisible(true);
                            setSessionTimeLeft(null);
                            window.location.reload();
                        }}
                        className="ml-2 hover:text-red-400 transition-colors"
                        title="Lock Session"
                    >
                        <Lock className="w-3 h-3" />
                    </button>
                </motion.div>
            )}

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{
                            y: '-100%',
                            transition: {
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1]
                            }
                        }}
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-slate-900 overflow-hidden"
                    >
                        {/* Background Pattern - Subtle Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                        <div className="relative z-10 flex flex-col items-center gap-12 p-8 text-center max-w-5xl w-full">

                            {/* Logo Area */}
                            <div className="relative">
                                <div className="relative w-64 h-24 md:w-80 md:h-32 mx-auto">
                                    <Image
                                        src="/navbar_logo.png"
                                        alt="Hotstart Energy"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex flex-col items-center gap-6">
                                <div>
                                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
                                        Unveiling Innovation
                                    </h1>
                                    <p className="mt-4 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
                                        The future of industrial power and automation is arriving.
                                    </p>
                                    {/* SEO Content (Hidden visually but available to crawlers) */}
                                    <div className="sr-only">
                                        Hotstart Energy is a leading provider of electrical, automation, and power distribution solutions in Pune, India.
                                        We are authorized partners for premium brands like Legrand, Socomec, KEI, and Havells.
                                        Our services include Industrial Automation, Switchgear, Energy Management Systems, and Power Distribution Units.
                                        Contact us for expert electrical solutions.
                                    </div>
                                </div>

                                {/* Countdown Timer */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="mt-8"
                                >
                                    <div className="flex items-baseline gap-2 sm:gap-4 font-mono text-4xl sm:text-6xl md:text-8xl font-light tracking-tighter text-slate-900 tabular-nums">
                                        <div className="flex flex-col items-center">
                                            <span>{timeComponents.days}</span>
                                            <span className="text-xs sm:text-sm font-medium tracking-widest text-slate-400 uppercase mt-2">Days</span>
                                        </div>
                                        <span className="text-slate-300 -mt-8">:</span>
                                        <div className="flex flex-col items-center">
                                            <span>{timeComponents.hours}</span>
                                            <span className="text-xs sm:text-sm font-medium tracking-widest text-slate-400 uppercase mt-2">Hours</span>
                                        </div>
                                        <span className="text-slate-300 -mt-8">:</span>
                                        <div className="flex flex-col items-center">
                                            <span>{timeComponents.minutes}</span>
                                            <span className="text-xs sm:text-sm font-medium tracking-widest text-slate-400 uppercase mt-2">Minutes</span>
                                        </div>
                                        <span className="text-slate-300 -mt-8">:</span>
                                        <div className="flex flex-col items-center">
                                            <span className="text-blue-600">{timeComponents.seconds}</span>
                                            <span className="text-xs sm:text-sm font-medium tracking-widest text-blue-400 uppercase mt-2">Seconds</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Progress Bar */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="w-full max-w-md mt-8"
                                >
                                    <div className="flex justify-between text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider h-5">
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={currentPhraseIndex}
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {LOADING_PHRASES[currentPhraseIndex]}
                                            </motion.span>
                                        </AnimatePresence>
                                        <span>{Math.round(progress)}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden relative">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progress}%` }}
                                            transition={{ type: "spring", stiffness: 50, damping: 20 }}
                                            style={{
                                                background: "linear-gradient(90deg, #2563eb, #60a5fa, #2563eb)",
                                                backgroundSize: "200% 100%",
                                                willChange: "width, transform"
                                            }}
                                            className="h-full rounded-full relative overflow-hidden"
                                        >
                                            {/* Moving Gradient Background Animation */}
                                            <motion.div
                                                className="absolute inset-0 z-0"
                                                animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                            />

                                            {/* Shimmer Overlay */}
                                            <motion.div
                                                className="absolute inset-0 z-10"
                                                style={{
                                                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                                                }}
                                                animate={{ x: ["-100%", "100%"] }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 1.2,
                                                    ease: "linear",
                                                }}
                                            />

                                            {/* Leading Edge Glow with Pulse */}
                                            <motion.div
                                                className="absolute right-0 top-0 bottom-0 w-[3px] bg-white z-20"
                                                animate={{
                                                    boxShadow: [
                                                        "0 0 10px 2px rgba(255,255,255,0.6)",
                                                        "0 0 20px 5px rgba(255,255,255,0.8)",
                                                        "0 0 10px 2px rgba(255,255,255,0.6)"
                                                    ]
                                                }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 1.5,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Login Modal */}
                            <AnimatePresence>
                                {showLogin && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-md z-[150]"
                                    >
                                        <motion.div
                                            initial={{ scale: 0.95, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.95, opacity: 0 }}
                                            className="bg-white border border-slate-200 p-8 rounded-2xl shadow-2xl w-full max-w-sm mx-4"
                                        >
                                            <div className="flex justify-between items-center mb-6">
                                                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                                                    <Unlock className="h-4 w-4 text-blue-600" />
                                                    Admin Access
                                                </h3>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => setShowLogin(false)}
                                                    className="h-8 w-8 p-0 rounded-full hover:bg-slate-100"
                                                >
                                                    ✕
                                                </Button>
                                            </div>
                                            <form onSubmit={handleLogin} className="space-y-4">
                                                <div className="space-y-2">
                                                    <Input
                                                        type="password"
                                                        placeholder="Enter access key"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        className="bg-slate-50 border-slate-200 focus:border-blue-600 focus:ring-blue-600/20"
                                                        autoFocus
                                                    />
                                                </div>
                                                <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white gap-2">
                                                    Enter Site <ArrowRight className="h-4 w-4" />
                                                </Button>
                                            </form>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Footer / Owner Access - Moved outside to stick to bottom */}
                        <div className="absolute bottom-8 w-full px-8 flex justify-between items-end z-20">
                            <div className="text-xs text-slate-400">
                                © 2025 Hotstart Energy Pvt. Ltd.
                            </div>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-slate-300 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                                onClick={() => setShowLogin(true)}
                            >
                                <Lock className="h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
