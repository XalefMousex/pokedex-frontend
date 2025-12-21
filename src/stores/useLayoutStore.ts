import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

import { DEFAULT_VARIANT, DEFAULT_COLLAPSIBLE } from 'constants/layout';

import { createCookieStorage } from './persisters/cookiePersister';

export type CollapsibleProps = 'icon' | 'none' | 'offcanvas';

type VariantProps = 'inset' | 'sidebar' | 'floating';

type LayoutStateProps = {
  variant: VariantProps;
  defaultVariant: VariantProps;
  collapsible: CollapsibleProps;
  defaultCollapsible: CollapsibleProps;
};

type LayoutActionsProps = {
  resetLayout: () => void;
  setVariant: (variant: VariantProps) => void;
  setCollapsible: (collapsible: CollapsibleProps) => void;
};

type LayoutStoreProps = LayoutStateProps & LayoutActionsProps;

export const useLayoutStore = create<LayoutStoreProps>()(
  devtools(
    persist(
      set => ({
        variant: DEFAULT_VARIANT,
        defaultVariant: DEFAULT_VARIANT,
        collapsible: DEFAULT_COLLAPSIBLE,
        defaultCollapsible: DEFAULT_COLLAPSIBLE,

        setVariant: (variant: VariantProps) =>
          set({ variant }, false, 'setVariant'),

        setCollapsible: (collapsible: CollapsibleProps) =>
          set({ collapsible }, false, 'setCollapsible'),

        resetLayout: () =>
          set(
            {
              variant: DEFAULT_VARIANT,
              collapsible: DEFAULT_COLLAPSIBLE,
            },
            false,
            'resetLayout',
          ),
      }),
      {
        name: 'layout',
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
