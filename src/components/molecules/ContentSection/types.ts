import { type ReactNode, type ComponentProps } from 'react';

export type ContentSectionProps = {
  title: string;
  description: string;
  children: ReactNode;
} & ComponentProps<'div'>;
