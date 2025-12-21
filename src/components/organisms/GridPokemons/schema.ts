import z from 'zod';

export const gridPokemonsSchema = z
  .object({
    search: z.string().min(2).max(100).optional(),
  })
  .strict();
