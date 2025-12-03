'use server';

import { addUser, deleteUser, getUsers, User } from '@/lib/users-store';
import { revalidatePath } from 'next/cache';

export async function createNewUser(prevState: any, formData: FormData) {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const role = formData.get('role') as 'admin' | 'editor';

    if (!username || !password) {
        return { success: false, error: 'Username and password are required' };
    }

    try {
        await addUser({
            username,
            password,
            role: role || 'admin',
            createdAt: new Date().toISOString(),
        });
        revalidatePath('/admin/users');
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function removeUser(username: string) {
    try {
        await deleteUser(username);
        revalidatePath('/admin/users');
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function getAllUsers() {
    return await getUsers();
}
