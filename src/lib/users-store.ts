import fs from 'fs/promises';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'users.json');

export interface User {
    username: string;
    password: string; // In a real app, this should be hashed!
    role: 'admin' | 'editor';
    createdAt: string;
}

// Default admin user if file doesn't exist
const DEFAULT_USER: User = {
    username: 'admin',
    password: 'hotadminstart',
    role: 'admin',
    createdAt: new Date().toISOString(),
};

async function ensureFileExists() {
    try {
        await fs.access(DATA_FILE_PATH);
    } catch {
        await fs.writeFile(DATA_FILE_PATH, JSON.stringify([DEFAULT_USER], null, 2));
    }
}

export async function getUsers(): Promise<User[]> {
    await ensureFileExists();
    const data = await fs.readFile(DATA_FILE_PATH, 'utf-8');
    return JSON.parse(data);
}

export async function saveUsers(users: User[]) {
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(users, null, 2));
}

export async function addUser(user: User) {
    const users = await getUsers();
    if (users.find(u => u.username === user.username)) {
        throw new Error('Username already exists');
    }
    users.push(user);
    await saveUsers(users);
}

export async function deleteUser(username: string) {
    const users = await getUsers();
    // Prevent deleting the last admin
    if (users.length <= 1) {
        throw new Error('Cannot delete the last user');
    }
    const newUsers = users.filter(u => u.username !== username);
    await saveUsers(newUsers);
}

export async function verifyUser(username: string, password: string): Promise<boolean> {
    const users = await getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    return !!user;
}
