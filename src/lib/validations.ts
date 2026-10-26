import { z } from 'zod';

export const clientSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid business email address.'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters.'),
  status: z.enum(['active', 'inactive']),
});

// Automagic TypeScript conversion from runtime validator to static type!
export type ClientFormValues = z.infer<typeof clientSchema>;
