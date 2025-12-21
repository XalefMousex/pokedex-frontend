import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

import { createCookieStorage } from './persisters/cookiePersister';

type SidebarStateProps = {
  isOpen: boolean;
  isMobile: boolean;
  isOpenMobile: boolean;
  state: 'expanded' | 'collapsed';
};

type SidebarActionsProps = {
  toggleSidebar: () => void;
  setIsOpen: (value: boolean | ((previous: boolean) => boolean)) => void;
  setIsMobile: (value: boolean | ((previous: boolean) => boolean)) => void;
  setIsOpenMobile: (value: boolean | ((previous: boolean) => boolean)) => void;
};

type SidebarStoreProps = SidebarStateProps & SidebarActionsProps;

export const useSidebarStore = create<SidebarStoreProps>()(
  devtools(
    persist(
      (set, get) => ({
        isOpen: true,
        isMobile: false,
        state: 'expanded',
        isOpenMobile: false,

        setIsMobile: value => {
          const isMobile =
            typeof value === 'function'
              ? (value as (v: boolean) => boolean)(get().isMobile)
              : value;

          set({ isMobile }, false, 'setIsMobile');
        },

        toggleSidebar: () => {
          const { isMobile, setIsOpen, setIsOpenMobile } = get();

          if (isMobile) {
            setIsOpenMobile(isOpen => !isOpen);

            return;
          }

          setIsOpen(isOpen => !isOpen);
        },

        setIsOpenMobile: value => {
          const isOpenMobile =
            typeof value === 'function'
              ? (value as (v: boolean) => boolean)(get().isOpenMobile)
              : value;

          set({ isOpenMobile }, false, 'setIsOpenMobile');
        },

        setIsOpen: value => {
          const isOpen =
            typeof value === 'function'
              ? (value as (value: boolean) => boolean)(get().isOpen)
              : value;

          set(
            {
              isOpen,
              state: isOpen ? 'expanded' : 'collapsed',
            },
            false,
            'setIsOpen',
          );
        },
      }),
      {
        name: 'sidebar',
        storage: createJSONStorage(() =>
          createCookieStorage({
            sameSite: 'strict',
            expires: new Date().getTime() + 1 * 3600 * 1000,
          }),
        ),
      },
    ),
  ),
);
