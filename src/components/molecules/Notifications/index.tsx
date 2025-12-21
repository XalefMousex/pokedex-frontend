'use client';

import { motion } from 'framer-motion';

import { NotificationIcon } from 'components/atoms/NotificationIcon';

import { type NotificationsProps } from './types';

export const Notifications = ({ ...props }: NotificationsProps) => (
  <motion.button
    className={`
      relative cursor-pointer rounded-full p-2 outline-none
      hover:bg-neutral-500/8
      focus:bg-neutral-500/8
      dark:text-neutral-400 dark:hover:bg-neutral-400/8
      dark:focus:bg-neutral-400/8
    `}
    type="button"
    initial={{ scale: 1 }}
    aria-label="Notifications"
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
    {...props}
  >
    <span
      className={`
        absolute top-0 right-0 flex h-5 min-w-5 items-center justify-center
        rounded-full bg-primary-500 px-1 text-xs font-medium text-gray-100
        transition-all
      `}
    >
      5
    </span>

    <NotificationIcon
      className={`
        size-6 text-neutral-500 transition-colors
        dark:text-neutral-400
      `}
    />
  </motion.button>
);
