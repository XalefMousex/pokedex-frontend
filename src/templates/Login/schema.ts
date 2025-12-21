import z from 'zod';

export const loginSchema = z
  .object({
    email: z.email().optional(),
    name: z.string().optional(),
    type: z.enum(['signIn', 'signUp']),
    password: z.string().min(8).optional(),
  })
  .strict()
  .superRefine((data, context) => {
    if (data.type === 'signUp' && !data.name) {
      context.addIssue({
        path: ['name'],
        code: z.ZodIssueCode.custom,
        message: 'Name is required',
      });
    }

    if (data.type === 'signUp' && !data.email) {
      context.addIssue({
        path: ['email'],
        code: z.ZodIssueCode.custom,
        message: 'Email is required',
      });
    }

    if (data.type === 'signUp' && !data.password) {
      context.addIssue({
        path: ['password'],
        code: z.ZodIssueCode.custom,
        message: 'Password is required',
      });
    }

    if (data.type === 'signIn' && !data.email) {
      context.addIssue({
        path: ['email'],
        code: z.ZodIssueCode.custom,
        message: 'Email is required for sign-in',
      });
    }

    if (data.type === 'signIn' && !data.password) {
      context.addIssue({
        path: ['password'],
        code: z.ZodIssueCode.custom,
        message: 'Password is required for sign-in',
      });
    }
  });
