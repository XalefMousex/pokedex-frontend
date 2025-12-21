import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

import { createCookieStorage } from './persisters/cookiePersister';

export type DirectionProps = 'ltr' | 'rtl';

type DirectionStateProps = {
  direction: DirectionProps;
  defaultDirection: DirectionProps;
};

type DirectionActionsProps = {
  resetDirection: () => void;
  setDirection: (direction: DirectionProps) => void;
};

type DirectionStoreProps = DirectionStateProps & DirectionActionsProps;

export const useDirectionStore = create<DirectionStoreProps>()(
  devtools(
    persist(
      set => ({
        direction: 'ltr',
        defaultDirection: 'ltr',

        resetDirection: () =>
          set({ direction: 'ltr' }, false, 'resetDirection'),

        setDirection: (direction: DirectionProps) =>
          set({ direction }, false, 'setDirection'),
      }),
      {
        name: 'direction',
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
