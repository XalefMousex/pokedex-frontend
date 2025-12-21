import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type SearchStateProps = {
  isOpen: boolean;
};

type SearchActionsProps = {
  setIsOpen: (isOpen: boolean) => void;
};

type SearchStoreProps = SearchStateProps & SearchActionsProps;

export const useSearchStore = create<SearchStoreProps>()(
  devtools(set => ({
    isOpen: false,

    setIsOpen: (isOpen: boolean) => {
      set({ isOpen }, false, 'setIsOpen');
    },
  })),
);
