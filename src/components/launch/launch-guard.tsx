'use client';

import { useState, useEffect } from 'react';
import { LAUNCH_CONFIG } from '@/lib/launch-config';
import { CountdownOverlay } from './countdown-overlay';
import { toast } from 'sonner';

interface LaunchGuardProps {
    children: React.ReactNode;
}

export function LaunchGuard({ children }: LaunchGuardProps) {
    const [isAllowed, setIsAllowed] = useState(false);
    const [isUnlocking, setIsUnlocking] = useState(false);

    useEffect(() => {
        // Security: Block F12, Right Click, etc.
        const handleContextMenu = (e: MouseEvent) => {
            if (!isAllowed) {
                e.preventDefault();
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isAllowed) {
                // Block F12
                if (e.key === 'F12') {
                    e.preventDefault();
                }
                // Block Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
                if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
                    e.preventDefault();
                }
                // Block Ctrl+U (View Source)
                if (e.ctrlKey && e.key === 'u') {
                    e.preventDefault();
                }
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isAllowed]);

    useEffect(() => {
        const checkAccess = () => {
            // Check session token
            const storedToken = sessionStorage.getItem(LAUNCH_CONFIG.ACCESS_TOKEN_KEY);
            if (storedToken) {
                const loginTime = parseInt(storedToken, 10);
                const now = Date.now();
                // Valid session
                if (!isNaN(loginTime) && (now - loginTime < LAUNCH_CONFIG.SESSION_DURATION_MS)) {
                    setIsAllowed(true);
                    return;
                }
            }

            // Check if launch date has passed
            const targetDate = new Date(LAUNCH_CONFIG.TARGET_DATE).getTime();
            if (Date.now() >= targetDate) {
                setIsAllowed(true);
                return;
            }

            setIsAllowed(false);
        };

        checkAccess();
        // Re-check periodically (optional, but CountdownOverlay handles expiry)
    }, []);

    const handleUnlock = () => {
        setIsUnlocking(true);
        // Small delay to allow state to propagate before showing children
        setTimeout(() => {
            setIsAllowed(true);
            setIsUnlocking(false);
        }, 100);
    };

    // If allowed, render children (and maybe the overlay if it's fading out? 
    // Actually, CountdownOverlay handles its own visibility state based on session.
    // If we are allowed, we render children.
    // BUT, if we just logged in, we want the overlay to fade out over the children.

    // Strategy:
    // 1. If !isAllowed: Render ONLY CountdownOverlay. Children are null.
    // 2. If isAllowed: Render Children.
    //    - But wait, CountdownOverlay needs to be there to "fade out".
    //    - So we ALWAYS render CountdownOverlay?
    //    - If we render CountdownOverlay always, it checks session and hides itself.
    //    - But we want to hide children if !isAllowed.

    // Refined Strategy:
    // Always render CountdownOverlay.
    // Conditionally render children based on isAllowed.
    // Pass a callback to CountdownOverlay to set isAllowed = true when login succeeds.

    return (
        <>
            {/* Main Content - Only in DOM if allowed */}
            {isAllowed && children}

            {/* Overlay - Handles locking, timer, and login */}
            <CountdownOverlay onUnlock={handleUnlock} />
        </>
    );
}
