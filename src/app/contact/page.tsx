import { ContactForm } from '@/components/contact/contact-form';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container max-w-2xl mx-auto px-4 py-12">
      <div className="text-center">
        <Mail className="mx-auto h-12 w-12 text-accent" />
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a question or need support? Drop us a line and we'll be happy to help.
        </p>
      </div>
      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  );
}
