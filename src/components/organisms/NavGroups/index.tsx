'use client';

import { useTranslations } from 'next-intl';

import { Users, HeartIcon, HelpCircle, LayoutDashboard } from 'lucide-react';

import { NavGroup } from 'components/molecules/NavGroup';

import { type NavGroupsProps } from './types';

export const NavGroups = ({ ...props }: NavGroupsProps) => {
  const t = useTranslations();

  const sidebar = [
    {
      title: t('sidebar.general.title'),
      items: [
        {
          url: '/dashboard',
          icon: LayoutDashboard,
          title: t('sidebar.general.items.explore'),
        },
        {
          icon: HeartIcon,
          url: '/dashboard/favorites',
          title: t('sidebar.general.items.favorites'),
        },
        {
          icon: Users,
          url: '/dashboard/teams',
          title: t('sidebar.general.items.teams'),
        },
      ],
    },
    {
      title: t('sidebar.other.title'),
      items: [
        {
          icon: HelpCircle,
          url: '/dashboard/help',
          title: t('sidebar.other.items.help'),
        },
      ],
    },
  ];

  return sidebar.map(item => (
    <NavGroup key={item.title} {...item} {...props} />
  ));
};
