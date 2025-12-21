'use client';

import { useRouter } from 'next/navigation';

import { type ReactNode } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import { useSearchStore } from 'stores/useSearchStore';
import { useSidebarStore } from 'stores/useSidebarStore';

type ShortcutProviderProps = {
  children: ReactNode;
};

export const ShortcutProvider = ({ children }: ShortcutProviderProps) => {
  const router = useRouter();

  const { toggleSidebar } = useSidebarStore();
  const { isOpen, setIsOpen } = useSearchStore();

  useHotkeys('ctrl+shift+p', () => router.push('/dashboard/settings'), {
    preventDefault: true,
  });

  useHotkeys('ctrl+s', () => router.push('/dashboard/settings'), {
    preventDefault: true,
  });

  useHotkeys('ctrl+k', () => setIsOpen(!isOpen), {
    preventDefault: true,
    enableOnFormTags: true,
  });

  useHotkeys('ctrl+b', () => toggleSidebar(), {
    preventDefault: true,
  });

  return children;
};
