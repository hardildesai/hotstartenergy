'use server';

const OWNER_PASSWORD = 'admin';

export async function verifyOwnerPassword(password: string) {
    // Simulate a slight delay to prevent timing attacks (optional but good practice)
    await new Promise(resolve => setTimeout(resolve, 500));

    if (password === OWNER_PASSWORD) {
        return { success: true };
    }

    return { success: false };
}
