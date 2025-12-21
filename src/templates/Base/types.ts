import { type ReactNode, type ComponentProps } from 'react';

export type BaseProps = {
  children: ReactNode;
} & ComponentProps<'div'>;
