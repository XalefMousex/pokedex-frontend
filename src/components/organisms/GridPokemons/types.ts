import type z from 'zod';

import { type ComponentProps } from 'react';

import { type gridPokemonsSchema } from './schema';

export type GridPokemonsSchemaProps = z.infer<typeof gridPokemonsSchema>;

export type GridPokemonsProps = {} & ComponentProps<'div'>;
