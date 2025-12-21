import { type ComponentProps } from 'react';

export type MainProps = {
  isFixed?: boolean;
  isFluid?: boolean;
} & ComponentProps<'main'>;
