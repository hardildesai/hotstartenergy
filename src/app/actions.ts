'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
  terms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions.',
  }),
});

export async function submitQuote(data: unknown) {
  const parsed = quoteSchema.safeParse(data);
  if (parsed.success) {
    console.log('New Quote Request:', parsed.data);
    // In a real app, you would process this data (e.g., send an email, save to DB)
    revalidatePath('/quote');
    return { success: true, message: 'Quote request submitted successfully!' };
  } else {
    return { success: false, message: 'Invalid data.', errors: parsed.error.flatten() };
  }
}

export async function submitContactForm(data: unknown) {
  const parsed = contactSchema.safeParse(data);
  if (parsed.success) {
    console.log('New Contact Form Submission:', parsed.data);
    revalidatePath('/contact');
    return { success: true, message: 'Your message has been sent!' };
  } else {
    return { success: false, message: 'Invalid data.', errors: parsed.error.flatten() };
  }
}
