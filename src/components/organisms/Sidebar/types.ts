import { type ComponentProps } from 'react';

export type SidebarProps = {
  side?: 'left' | 'right';
  variant?: 'inset' | 'sidebar' | 'floating';
  collapsible?: 'icon' | 'none' | 'offcanvas';
} & ComponentProps<'div'>;
