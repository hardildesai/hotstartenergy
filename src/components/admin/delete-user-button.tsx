'use client';

import { useState } from 'react';
import { removeUser } from '@/app/actions/user-management';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';

export function DeleteUserButton({ username }: { username: string }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        if (!confirm(`Are you sure you want to delete user "${username}"?`)) return;

        setIsLoading(true);
        try {
            const result = await removeUser(username);
            if (result.success) {
                toast.success('User deleted successfully');
            } else {
                toast.error(result.error || 'Failed to delete user');
            }
        } catch (error) {
            toast.error('An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            className="text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={handleDelete}
            disabled={isLoading}
        >
            <Trash2 className="w-4 h-4" />
        </Button>
    );
}
