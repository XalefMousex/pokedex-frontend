import { type ElementType } from 'react';

type TeamProps = {
  name: string;
  plan: string;
  logo: ElementType;
};

export type NavItemProps = {
  url?: string;
  title: string;
  badge?: number;
  icon?: ElementType;
  items?: NavItemProps[];
};

type NavGroupProps = {
  title: string;
  items: NavItemProps[];
};

export type SidebarDataPropsProps = {
  teams: TeamProps[];
  navGroups: NavGroupProps[];
};
