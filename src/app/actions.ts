'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function submitQuote(data: unknown) {
  const parsed = quoteSchema.safeParse(data);
  if (parsed.success) {

    // In a real app, you would process this data (e.g., send an email, save to DB)
    revalidatePath('/quote');
    return { success: true, message: 'Quote request submitted successfully!' };
  } else {
    return { success: false, message: 'Invalid data.', errors: parsed.error.flatten() };
  }
}
