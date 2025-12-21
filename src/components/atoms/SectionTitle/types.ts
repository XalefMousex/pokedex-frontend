import { type ComponentProps } from 'react';

export type SectionTitleProps = {
  title: string;
  className?: string;
  showReset?: boolean;
  onReset?: () => void;
} & ComponentProps<'div'>;
