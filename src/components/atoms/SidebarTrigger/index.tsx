'use client';

import { PanelLeftIcon } from 'lucide-react';

import { useSidebarStore } from 'stores/useSidebarStore';

import { SimpleButton } from 'components/atoms/SimpleButton';

import { cn } from 'utils/tailwind/cn';

import { type SidebarTriggerProps } from './types';

export const SidebarTrigger = ({
  onClick,
  className,
  ...props
}: SidebarTriggerProps) => {
  const { toggleSidebar } = useSidebarStore();

  return (
    <SimpleButton
      onClick={event => {
        onClick?.(event);
        toggleSidebar();
      }}
      size="icon"
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      className={cn('size-8', className)}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </SimpleButton>
  );
};
