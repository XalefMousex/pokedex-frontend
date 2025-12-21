import { type Ref, type ComponentProps } from 'react';

export type HeaderProps = {
  fixed?: boolean;
  ref?: Ref<HTMLElement>;
} & ComponentProps<'header'>;
