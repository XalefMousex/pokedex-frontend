import { type SidebarDataPropsProps } from 'types/sidebar';
import {
  Users,
  HeartIcon,
  ClockIcon,
  HelpCircle,
  LayoutDashboard,
} from 'lucide-react';

export const SIDEBAR_WIDTH = '16rem';

export const SIDEBAR_WIDTH_MOBILE = '18rem';

export const SIDEBAR_WIDTH_ICON = '3rem';

export const sidebar: SidebarDataPropsProps = {
  teams: [],

  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Explore',
          url: '/dashboard',
          icon: LayoutDashboard,
        },
        {
          icon: HeartIcon,
          title: 'Favorites',
          url: '/dashboard/favorites',
        },
        {
          icon: Users,
          title: 'Teams',
          url: '/dashboard/teams',
        },
        {
          icon: ClockIcon,
          title: 'History',
          url: '/dashboard/history',
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          icon: HelpCircle,
          title: 'Help Center',
          url: '/dashboard/help',
        },
      ],
    },
  ],
};
