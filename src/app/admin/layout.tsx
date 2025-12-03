import { isLoggedIn } from '@/app/actions/admin-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Package, LogOut, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { logout } from '@/app/actions/admin-auth';

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const authenticated = await isLoggedIn();

    // If not authenticated, allow access only to login page
    // But since this layout wraps /admin, we need to handle the redirect logic carefully.
    // Ideally, we check the path, but in a layout we don't have easy access to the path without headers.
    // However, if we are in /admin/login, we shouldn't redirect.
    // A cleaner way is to have a separate layout for login or handle it in middleware.
    // For simplicity, we'll assume this layout wraps the protected part, and login is separate or we check headers.

    // Actually, let's make /admin/login a sibling to the protected layout if possible, 
    // OR just check if we are authenticated. If not, and we are not on login page...
    // Since we can't easily check the URL in a server component layout without headers(), 
    // we will rely on the page components or a middleware. 
    // BUT, for this task, let's put the check here and if it fails, we render the children ONLY if it's the login page? 
    // No, that's messy.

    // Better approach: 
    // 1. /admin/login is a public page.
    // 2. /admin/* (except login) is protected.
    // We can use a Route Group (protected) inside admin.

    // For now, let's just do a simple check. If the user is NOT logged in, we redirect to /admin/login.
    // BUT we must ensure /admin/login doesn't use this layout if this layout enforces auth.
    // So I will create the layout for the ROOT of admin, but I will only enforce auth if the segment is NOT login.
    // Since I can't know the segment easily, I'll move the protected layout to `src/app/admin/(protected)/layout.tsx` 
    // and move the dashboard pages there.

    // Wait, I'll just keep it simple. If I put this in `src/app/admin/layout.tsx`, it applies to login too.
    // So I will NOT put the auth check in the layout. I'll put it in the page components or use a middleware.
    // OR, I can create a `src/app/admin/(dashboard)/layout.tsx` for the dashboard part.

    // Let's go with `src/app/admin/layout.tsx` providing the SHELL, and we'll handle protection in the pages.

    return (
        <div className="min-h-screen bg-slate-50">
            {children}
        </div>
    );
}
