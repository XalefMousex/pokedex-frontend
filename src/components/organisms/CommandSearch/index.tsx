'use client';

import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { useCallback } from 'react';

import {
  Users,
  Laptop,
  HeartIcon,
  ArrowRight,
  HelpCircle,
  LayoutDashboard,
} from 'lucide-react';

import { useSearchStore } from 'stores/useSearchStore';

import { SunIcon } from 'components/atoms/SunIcon';
import { MoonIcon } from 'components/atoms/MoonIcon';
import { CommandList } from 'components/atoms/CommandList';
import { CommandItem } from 'components/atoms/CommandItem';
import { CommandEmpty } from 'components/atoms/CommandEmpty';
import { CommandGroup } from 'components/atoms/CommandGroup';
import { ScrollArea } from 'components/molecules/ScrollArea';
import { CommandInput } from 'components/molecules/CommandInput';
import { CommandDialog } from 'components/molecules/CommandDialog';
import { CommandSeparator } from 'components/atoms/CommandSeparator';

import { type CommandSearchProps } from './types';

export const CommandSearch = ({ ...props }: CommandSearchProps) => {
  const t = useTranslations();

  const router = useRouter();

  const { setTheme } = useTheme();
  const { isOpen, setIsOpen } = useSearchStore();

  const runCommand = useCallback(
    (command: () => unknown) => {
      setIsOpen(false);
      command();
    },
    [setIsOpen],
  );

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

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen} modal {...props}>
      <CommandInput
        placeholder={t('command.search.placeholder', {
          default: 'Type a command or search...',
        })}
      />

      <CommandList>
        <ScrollArea type="hover" className="h-72 pe-1">
          <CommandEmpty>{t('command.search.empty')}</CommandEmpty>

          {sidebar.map(group => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map(item => (
                <CommandItem
                  key={item.url}
                  value={item.title}
                  onSelect={() => runCommand(() => router.push(item.url))}
                >
                  <div className="flex size-4 items-center justify-center">
                    <ArrowRight
                      className={`
                        size-2 text-neutral-500
                        dark:text-neutral-400
                      `}
                    />
                  </div>

                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}

          <CommandSeparator className="my-4" />

          <CommandGroup heading={t('theme.title', { default: 'Theme' })}>
            <CommandItem onSelect={() => runCommand(() => setTheme('light'))}>
              <SunIcon />
              <span>{t('theme.options.light')}</span>
            </CommandItem>

            <CommandItem onSelect={() => runCommand(() => setTheme('dark'))}>
              <MoonIcon />
              <span>{t('theme.options.dark')}</span>
            </CommandItem>

            <CommandItem onSelect={() => runCommand(() => setTheme('system'))}>
              <Laptop />
              <span>{t('theme.options.system')}</span>
            </CommandItem>
          </CommandGroup>
        </ScrollArea>
      </CommandList>
    </CommandDialog>
  );
};
