import { isLoggedIn } from '@/app/actions/admin-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Package, LogOut, MessageSquare, User } from 'lucide-react';
import { AdminLogoutButton } from '@/components/admin/logout-button';

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const authenticated = await isLoggedIn();

    if (!authenticated) {
        redirect('/admin/login');
    }

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white hidden md:block fixed h-full">
                <div className="p-6">
                    <h2 className="text-xl font-bold">Hotstart Admin</h2>
                </div>
                <nav className="px-4 space-y-2">
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors">
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </Link>
                    <Link href="/admin/products" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors">
                        <Package className="w-5 h-5" />
                        Products
                    </Link>
                    <Link href="/admin/messages" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors">
                        <MessageSquare className="w-5 h-5" />
                        Messages
                    </Link>
                    <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors">
                        <User className="w-5 h-5" />
                        Users
                    </Link>
                </nav>
                <div className="absolute bottom-0 w-full p-4 border-t border-white/10">
                    <AdminLogoutButton />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-8">
                {children}
            </main>
        </div>
    );
}
