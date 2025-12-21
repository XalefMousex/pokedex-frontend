import { type ComponentProps } from 'react';

import { type NavItemProps } from 'types/sidebar';

export type SidebarMenuCollapsedDropdownProps = {
  href: string;
  item: NavItemProps;
} & ComponentProps<'div'>;
