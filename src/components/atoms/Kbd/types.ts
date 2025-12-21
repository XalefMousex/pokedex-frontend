import { type ReactNode, type ComponentProps } from 'react';

export type KbdProps = {
  separator?: ReactNode;
} & ComponentProps<'span'>;
