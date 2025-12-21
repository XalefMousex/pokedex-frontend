import type z from 'zod';

import { type ComponentProps } from 'react';

import { type loginSchema } from './schema';

export type LoginSchemaProps = z.infer<typeof loginSchema>;

export type LoginProps = {} & ComponentProps<'div'>;
