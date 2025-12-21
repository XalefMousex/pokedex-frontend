import { Input } from 'components/molecules/Input';

import { cn } from 'utils/tailwind/cn';

import { type SidebarInputProps } from './types';

export const SidebarInput = ({ className, ...props }: SidebarInputProps) => (
  <Input
    data-sidebar="input"
    data-slot="sidebar-input"
    className={cn('h-8 w-full shadow-none', className)}
    {...props}
  />
);
