import { AdvisorForm } from '@/components/advisor/advisor-form';
import { Lightbulb } from 'lucide-react';

export default function AdvisorPage() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-12">
      <div className="text-center">
        <Lightbulb className="mx-auto h-12 w-12 text-accent" />
        <h1 className="mt-4 text-4xl font-bold tracking-tight">AI Solution Advisor</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Describe your project needs, and our AI will recommend the best switchgear solutions for you. Be as detailed as possible for the best results.
        </p>
      </div>
      <div className="mt-12">
        <AdvisorForm />
      </div>
    </div>
  );
}
