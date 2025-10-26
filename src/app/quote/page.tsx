import { QuoteForm } from '@/components/quote/quote-form';
import { FileText } from 'lucide-react';

export default function QuotePage() {
  return (
    <div className="container max-w-2xl mx-auto px-4 py-12 pt-32">
      <div className="text-center">
        <FileText className="mx-auto h-12 w-12 text-accent" />
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Request a Quote</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Fill out the form below with your requirements, and our team will get back to you with a detailed quotation.
        </p>
      </div>
      <div className="mt-12">
        <QuoteForm />
      </div>
    </div>
  );
}
