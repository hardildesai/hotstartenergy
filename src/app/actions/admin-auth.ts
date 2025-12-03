'use server';

import { cookies } from 'next/headers';
import { verifyUser } from '@/lib/users-store';

const SESSION_COOKIE_NAME = 'hotstart_admin_session';

export async function login(username: string, password: string) {
    const isValid = await verifyUser(username, password);

    if (isValid) {
        // Set a cookie that expires in 24 hours
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const cookieStore = await cookies();
        cookieStore.set(SESSION_COOKIE_NAME, 'true', {
            expires,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/'
        });
        return { success: true };
    }

    return { success: false, error: 'Invalid username or password' };
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE_NAME);
    return { success: true };
}

export async function isLoggedIn() {
    const cookieStore = await cookies();
    return cookieStore.has(SESSION_COOKIE_NAME);
}
