import { type ComponentProps } from 'react';

export type SidebarMenuSubButtonProps = {
  asChild?: boolean;
  isActive?: boolean;
  size?: 'small' | 'medium';
} & ComponentProps<'a'>;
