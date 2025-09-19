'use server';
/**
 * @fileOverview This file defines a Genkit flow for suggesting switchgear solutions based on user requirements.
 *
 * It includes:
 * - suggestSolutionsFromRequirements - A function to trigger the flow.
 * - SuggestSolutionsFromRequirementsInput - The input type for the function.
 * - SuggestSolutionsFromRequirementsOutput - The output type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSolutionsFromRequirementsInputSchema = z.object({
  requirements: z
    .string()
    .describe(
      'The specific requirements for the project, including load, application type, and safety requirements.'
    ),
});
export type SuggestSolutionsFromRequirementsInput = z.infer<
  typeof SuggestSolutionsFromRequirementsInputSchema
>;

const SuggestSolutionsFromRequirementsOutputSchema = z.object({
  suggestedSolutions: z
    .string()
    .describe('The suggested switchgear solutions based on the provided requirements.'),
});
export type SuggestSolutionsFromRequirementsOutput = z.infer<
  typeof SuggestSolutionsFromRequirementsOutputSchema
>;

export async function suggestSolutionsFromRequirements(
  input: SuggestSolutionsFromRequirementsInput
): Promise<SuggestSolutionsFromRequirementsOutput> {
  return suggestSolutionsFromRequirementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestSolutionsFromRequirementsPrompt',
  input: {schema: SuggestSolutionsFromRequirementsInputSchema},
  output: {schema: SuggestSolutionsFromRequirementsOutputSchema},
  prompt: `You are an expert solutions advisor for Hotstart Solutions. Based on the user's requirements, suggest optimal switchgear solutions.

Requirements: {{{requirements}}}

Suggest switchgear solutions:`, //Crucially use triple curly braces to avoid HTML escaping
});

const suggestSolutionsFromRequirementsFlow = ai.defineFlow(
  {
    name: 'suggestSolutionsFromRequirementsFlow',
    inputSchema: SuggestSolutionsFromRequirementsInputSchema,
    outputSchema: SuggestSolutionsFromRequirementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
