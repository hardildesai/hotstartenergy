'use client';

import { useState } from 'react';
import { createNewUser } from '@/app/actions/user-management';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';

export function AddUserForm() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        setIsLoading(true);
        try {
            const result = await createNewUser(null, formData);
            if (result.success) {
                toast.success('User created successfully');
                // Reset form manually or rely on key change if needed, 
                // but for simple form, we can just clear inputs if we controlled them.
                // Since we are using FormData, we can reset the form element.
                (document.getElementById('add-user-form') as HTMLFormElement).reset();
            } else {
                toast.error(result.error || 'Failed to create user');
            }
        } catch (error) {
            toast.error('An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add New User</CardTitle>
                <CardDescription>Create a new admin account.</CardDescription>
            </CardHeader>
            <CardContent>
                <form id="add-user-form" action={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" name="username" placeholder="johndoe" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" name="password" type="password" placeholder="••••••••" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Select name="role" defaultValue="admin">
                            <SelectTrigger>
                                <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="editor">Editor</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Creating...' : (
                            <>
                                <Plus className="w-4 h-4 mr-2" /> Create User
                            </>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
