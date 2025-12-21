import { type ComponentProps } from 'react';

import { type NavItemProps } from 'types/sidebar';

export type NavGroupProps = {
  title: string;
  items: NavItemProps[];
} & ComponentProps<'div'>;
