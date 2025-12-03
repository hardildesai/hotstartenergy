import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function MessagesPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Messages</h1>

            <Card>
                <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle>Email Integration Active</CardTitle>
                    <CardDescription>
                        Contact form submissions are currently configured to be sent directly to your email address.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        To view messages, please check the inbox for the email address configured in your environment variables (`EMAIL_USER`).
                        <br /><br />
                        <strong>Note:</strong> Since this application is running without a database, messages are not stored persistently on the server.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
