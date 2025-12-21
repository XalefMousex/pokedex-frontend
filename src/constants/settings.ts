import { Bell, Wrench, Monitor, Palette, UserCog } from 'lucide-react';

export const settings = [
  {
    icon: UserCog,
    title: 'Profile',
    href: '/dashboard/settings',
  },
  {
    icon: Wrench,
    title: 'Account',
    href: '/dashboard/settings/account',
  },
  {
    icon: Palette,
    title: 'Appearance',
    href: '/dashboard/settings/appearance',
  },
  {
    icon: Bell,
    title: 'Notifications',
    href: '/dashboard/settings/notifications',
  },
  {
    icon: Monitor,
    title: 'Display',
    href: '/dashboard/settings/display',
  },
];
