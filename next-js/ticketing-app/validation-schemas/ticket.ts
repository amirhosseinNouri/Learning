import { z } from 'zod';

const ticketSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  description: z.string().min(1, 'Description is required').max(65535),
  status: z.string().min(1, 'Status is required').max(10).optional(),
  priority: z.string().min(1, 'Priority is required').optional(),
});

export { ticketSchema };
