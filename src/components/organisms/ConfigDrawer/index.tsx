'use client';

import { useTheme } from 'next-themes';

import { motion } from 'framer-motion';

import { useLayoutStore } from 'stores/useLayoutStore';
import { useSidebarStore } from 'stores/useSidebarStore';
import { useDirectionStore } from 'stores/useDirectionStore';

import { Sheet } from 'components/atoms/Sheet';
import { Button } from 'components/atoms/Button';
import { SheetTitle } from 'components/atoms/SheetTitle';
import { SheetHeader } from 'components/atoms/SheetHeader';
import { SheetFooter } from 'components/atoms/SheetFooter';
import { SheetTrigger } from 'components/atoms/SheetTrigger';
import { SheetContent } from 'components/atoms/SheetContent';
import { SettingsIcon } from 'components/atoms/SettingsIcon';
import { ThemeConfig } from 'components/molecules/ThemeConfig';
import { LayoutConfig } from 'components/molecules/LayoutConfig';
import { SidebarConfig } from 'components/molecules/SidebarConfig';
import { SheetDescription } from 'components/atoms/SheetDescription';
import { DirectionConfig } from 'components/molecules/DirectionConfig';

import { type ConfigDrawerProps } from './types';

export const ConfigDrawer = ({ ...props }: ConfigDrawerProps) => {
  const { setTheme } = useTheme();

  const { setIsOpen } = useSidebarStore();
  const { resetLayout } = useLayoutStore();
  const { resetDirection } = useDirectionStore();

  const handleReset = () => {
    setIsOpen(true);

    resetLayout();
    resetDirection();

    setTheme('system');
  };

  return (
    <Sheet {...props}>
      <SheetTrigger asChild>
        <motion.button
          className={`
            flex size-10 cursor-pointer items-center justify-center rounded-full
            text-neutral-500 transition-colors outline-none
            hover:bg-neutral-500/8
            focus:bg-neutral-500/8
            dark:text-neutral-400 dark:hover:bg-neutral-400/8
            dark:focus:bg-neutral-400/8
          `}
          type="button"
          aria-label="Settings"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          {...props}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
          >
            <SettingsIcon aria-hidden="true" />
          </motion.div>
        </motion.button>
      </SheetTrigger>

      <SheetContent hasBlur={false} className="flex flex-col">
        <SheetHeader className="pb-0 text-start">
          <SheetTitle>Theme Settings</SheetTitle>

          <SheetDescription id="config-drawer-description">
            Adjust the appearance and layout to suit your preferences.
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 overflow-y-auto px-4">
          <ThemeConfig />
          <SidebarConfig />
          <LayoutConfig />
          <DirectionConfig />
        </div>

        <SheetFooter className="gap-2">
          <Button
            color="danger"
            onClick={handleReset}
            aria-label="Reset all settings to default values"
            isFullWidth
          >
            Reset
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
