import { getAllUsers } from '@/app/actions/user-management';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { AddUserForm } from '@/components/admin/add-user-form';
import { DeleteUserButton } from '@/components/admin/delete-user-button';
import { User } from 'lucide-react';

export default async function UsersPage() {
    const users = await getAllUsers();

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">User Management</h1>
                    <p className="text-muted-foreground">Manage admin access to the dashboard.</p>
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {/* User List */}
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Current Users</CardTitle>
                        <CardDescription>List of users with access to the admin panel.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Username</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Created At</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.username}>
                                        <TableCell className="font-medium flex items-center gap-2">
                                            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                                                <User className="w-4 h-4 text-slate-500" />
                                            </div>
                                            {user.username}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                                                {user.role}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground text-sm">
                                            {new Date(user.createdAt).toLocaleDateString()}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <DeleteUserButton username={user.username} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Add User Form */}
                <div className="md:col-span-1">
                    <AddUserForm />
                </div>
            </div>
        </div>
    );
}
