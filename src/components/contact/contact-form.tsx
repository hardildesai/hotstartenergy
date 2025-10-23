'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { submitContactForm } from '@/app/actions';
import { Loader2 } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
  terms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      terms: false,
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const result = await submitContactForm(data);
    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please check the form and try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NAME</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>EMAIL</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>MESSAGE</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter Your Message"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree with{' '}
                  <Link href="/terms-of-use" className="underline hover:text-primary">
                    Terms and Conditions
                  </Link>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
           {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
           Send Your Request
        </Button>
      </form>
    </Form>
  );
}
