'use client';

import { LogOut } from 'lucide-react';
import { logout } from '@/app/actions/admin-auth';
import { useRouter } from 'next/navigation';

export function AdminLogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push('/admin/login');
    };

    return (
        <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-colors w-full text-left text-slate-400"
        >
            <LogOut className="w-5 h-5" />
            Logout
        </button>
    );
}
