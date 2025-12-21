'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

import { useTransition } from 'react';

import { motion } from 'framer-motion';
import { routing, type LocaleProps } from 'i18n/routing';
import { useRouter, usePathname } from 'i18n/navigation';

import { DropdownMenu } from 'components/atoms/DropdownMenu';
import { DropdownMenuItem } from 'components/atoms/DropdownMenuItem';
import { DropdownMenuTrigger } from 'components/atoms/DropdownMenuTrigger';
import { DropdownMenuContent } from 'components/atoms/DropdownMenuContent';

import { cn } from 'utils/tailwind/cn';

import { type LanguageSelectorProps } from './types';

export const LanguageSelector = ({
  className,
  ...props
}: LanguageSelectorProps) => {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations('locales');

  const locale = useLocale();

  const locales = routing.locales.map(item => ({
    id: item,
    flag: `/svg/flags/${item}.svg`,
  }));

  const currentLocale = locales.find(item => item.id === locale);

  const onLocaleChange = (newLocale: LocaleProps) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          className={cn(
            `
              flex size-10 cursor-pointer items-center justify-center
              rounded-full text-neutral-500 transition-colors outline-none
              hover:bg-neutral-500/8
              focus:bg-neutral-500/8
              dark:text-neutral-400 dark:hover:bg-neutral-400/8
              dark:focus:bg-neutral-400/8
            `,
            className,
          )}
          type="button"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          {...props}
        >
          {currentLocale && (
            <div className="relative w-[26px]" style={{ aspectRatio: '3/2' }}>
              <Image
                alt="Current Language"
                className="select-none"
                src={currentLocale.flag}
                fill
              />
            </div>
          )}
        </motion.button>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={8} hasArrow>
        {locales.map(item => (
          <DropdownMenuItem
            className={`
              flex h-9 w-full cursor-pointer items-center gap-4 rounded-md px-2
              py-1.5 transition-colors outline-none
              hover:bg-neutral-500/10
              focus:bg-neutral-500/10
              disabled:cursor-not-allowed disabled:opacity-50
              dark:hover:bg-neutral-400/10 dark:focus:bg-neutral-400/10
            `}
            key={item.id}
            disabled={isPending}
            onClick={() => onLocaleChange(item.id)}
          >
            <div className="relative w-[26px]" style={{ aspectRatio: '3/2' }}>
              <Image
                src={item.flag}
                className="select-none"
                alt={`Language ${t(`${item.id}.name`)}`}
                fill
              />
            </div>

            <span>{t(`${item.id}.name`)}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
