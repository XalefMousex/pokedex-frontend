'use client';

import { SearchIcon } from 'lucide-react';

import { useSearchStore } from 'stores/useSearchStore';

import { Kbd, KbdKey } from 'components/atoms/Kbd';
import { SimpleButton } from 'components/atoms/SimpleButton';

import { cn } from 'utils/tailwind/cn';

import { type SearchProps } from './types';

export const Search = ({
  className = '',
  placeholder = 'Search',
}: SearchProps) => {
  const { isOpen, setIsOpen } = useSearchStore();

  return (
    <SimpleButton
      className={cn(
        `
          group relative h-8 w-full flex-1 justify-start rounded-md text-sm
          font-normal text-neutral-500 shadow-none transition-all
          sm:w-40 sm:pe-12
          md:flex-none
          lg:w-52
          xl:w-64
          dark:text-neutral-400
        `,
        className,
      )}
      variant="outline"
      onClick={() => setIsOpen(!isOpen)}
    >
      <SearchIcon
        size={16}
        aria-hidden="true"
        className="absolute start-1.5 top-1/2 -translate-y-1/2"
      />

      <span className={`ms-4`}>{placeholder}</span>

      <Kbd
        className={`
          pointer-events-none absolute end-[0.3rem] top-[0.3rem] hidden h-5
          items-center gap-1 rounded-sm border bg-gray-100 px-1.5 font-mono
          text-[10px] font-medium opacity-100 select-none
          sm:flex
          dark:bg-shark-950
        `}
      >
        <KbdKey aria-label="Meta" className="text-xs">
          ⌘
        </KbdKey>

        <KbdKey>K</KbdKey>
      </Kbd>
    </SimpleButton>
  );
};
