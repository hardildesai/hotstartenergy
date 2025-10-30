'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { suggestSolutionsFromRequirements } from '@/ai/flows/suggest-solutions-from-requirements';

const formSchema = z.object({
  requirements: z.string().min(20, 'Please provide more details about your requirements.'),
});

type FormValues = z.infer<typeof formSchema>;

export function AdvisorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requirements: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const response = await suggestSolutionsFromRequirements(data);
      setResult(response.suggestedSolutions);
    } catch (e) {
      console.error(e);
      setError('An error occurred while generating suggestions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="requirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Project Requirements</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'I need a solution for a 5-story commercial building with a peak load of 500kW. Key priorities are safety and energy efficiency. We need to power lighting, HVAC, and office equipment.'"
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                 <Sparkles className="mr-2 h-4 w-4" />
                 Get Suggestions
                </>
              )}
            </Button>
          </form>
        </Form>
        
        {result && (
            <div className="mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                           <Sparkles className="h-5 w-5 text-accent" />
                           Suggested Solutions
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-sm max-w-none text-foreground">
                        <p>{result}</p>
                    </CardContent>
                </Card>
            </div>
        )}

        {error && (
            <div className="mt-8 text-center text-destructive">
                <p>{error}</p>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
