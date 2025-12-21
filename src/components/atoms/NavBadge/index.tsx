import { Badge } from 'components/atoms/Badge';

import { cn } from 'utils/tailwind/cn';

import { type NavBadgeProps } from './types';

export const NavBadge = ({ children, className, ...props }: NavBadgeProps) => (
  <Badge className={cn('rounded-full px-1 py-0 text-xs', className)} {...props}>
    {children}
  </Badge>
);
