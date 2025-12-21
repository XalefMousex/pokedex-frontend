'use client';

import { useTheme } from 'next-themes';

import { useCallback } from 'react';

import { motion } from 'framer-motion';

import { SunIcon } from 'components/atoms/SunIcon';
import { MoonIcon } from 'components/atoms/MoonIcon';

import { cn } from 'utils/tailwind/cn';

import { createAnimation } from 'styles/theme/animations';

import { type ModeSwitcherProps } from './types';

export const ModeSwitcher = ({
  url = '',
  className,
  start = 'top-left',
  variant = 'circle-blur',
  ...props
}: ModeSwitcherProps) => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? (systemTheme ?? 'system') : theme;

  const styleId = 'theme-transition-styles';

  const updateStyles = useCallback((css: string) => {
    if (typeof window === 'undefined') return;

    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = css;
  }, []);

  const toggleTheme = useCallback(() => {
    const animation = createAnimation(variant, start, url);

    updateStyles(animation.css);

    if (typeof window === 'undefined') return;

    const switchTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    if (!document.startViewTransition) {
      switchTheme();

      return;
    }

    document.startViewTransition(switchTheme);
  }, [variant, start, url, theme, setTheme]);

  return (
    <motion.button
      className={cn(
        `
          flex size-10 cursor-pointer items-center justify-center rounded-full
          text-neutral-500 transition-colors outline-none
          hover:bg-neutral-500/8
          focus:bg-neutral-500/8
          dark:text-neutral-400 dark:hover:bg-neutral-400/8
          dark:focus:bg-neutral-400/8
        `,
        className,
      )}
      type="button"
      role="checkbox"
      onClick={toggleTheme}
      initial={{ scale: 1 }}
      aria-label="Mode Switcher"
      whileHover={{ scale: 1.05 }}
      aria-checked={currentTheme === 'dark'}
      transition={{ type: 'spring', stiffness: 300 }}
      suppressHydrationWarning
      {...props}
    >
      <SunIcon size={20} className="dark:hidden" />

      <MoonIcon
        className={`
          hidden
          dark:flex
        `}
        size={20}
      />
    </motion.button>
  );
};
