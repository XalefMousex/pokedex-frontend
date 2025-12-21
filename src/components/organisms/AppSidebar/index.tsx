'use client';

import { useLayoutStore } from 'stores/useLayoutStore';

import { Sidebar } from 'components/organisms/Sidebar';

import { type AppSidebarProps } from './types';

export const AppSidebar = ({ ...props }: AppSidebarProps) => {
  const { variant, collapsible } = useLayoutStore();

  return <Sidebar {...props} variant={variant} collapsible={collapsible} />;
};
