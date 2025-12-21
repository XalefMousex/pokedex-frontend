'use client';

import { useLocale } from 'next-intl';

import { useState } from 'react';

import { toast } from 'sonner';
import { useRouter } from 'i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { DropdownMenuItem } from 'components/atoms/DropdownMenuItem';
import { DropdownMenuShortcut } from 'components/atoms/DropdownMenuShortcut';

import { signOut } from 'lib/auth';

import { type SignOutButtonProps } from './types';

const loadingSpinnerAnimations = {
  initial: { rotate: 0, opacity: 0 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  animate: {
    opacity: 1,
    rotate: 360,
    transition: {
      opacity: {
        duration: 0.2,
      },
      rotate: {
        duration: 1,
        ease: 'linear' as const,
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  },
};

export const SignOutButton = ({
  icon,
  shortcut,
  ...props
}: SignOutButtonProps) => {
  const [isPending, setIsPending] = useState(false);

  const locale = useLocale();

  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onResponse: () => {
          setIsPending(false);
        },
        onError: context => {
          toast.error(context.error.message);
        },
        onSuccess: () => {
          toast.success('You’ve logged out. See you soon!');
          router.push('/', { locale });
        },
      },
    });
  };

  return (
    <DropdownMenuItem
      disabled={isPending}
      variant="destructive"
      onClick={handleSignOut}
      {...props}
    >
      <AnimatePresence>
        {!isPending && (
          <>
            {icon && icon}
            Sign out
            {shortcut && (
              <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
            )}
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPending && (
          <div className="flex h-4 w-full items-center justify-center">
            <motion.svg
              width="18"
              height="18"
              fill="none"
              exit="exit"
              initial="initial"
              animate="animate"
              viewBox="0 0 22 22"
              aria-label="Loading"
              key="loading-spinner"
              className="absolute z-20"
              xmlns="http://www.w3.org/2000/svg"
              variants={loadingSpinnerAnimations}
            >
              <path
                strokeWidth="2"
                stroke="currentColor"
                strokeLinecap="round"
                d="M14.4375 3.4375C15.8767 4.10872 17.0942 5.17707 17.9468 6.51682C18.7993 7.85658 19.2515 9.41198 19.25 11C19.25 13.188 18.3808 15.2865 16.8336 16.8336C15.2865 18.3808 13.188 19.25 11 19.25C8.81197 19.25 6.71355 18.3808 5.16637 16.8336C3.6192 15.2865 2.75 13.188 2.75 11C2.74851 9.41198 3.20066 7.85658 4.05323 6.51682C4.9058 5.17707 6.12331 4.10872 7.5625 3.4375"
              />
            </motion.svg>
          </div>
        )}
      </AnimatePresence>
    </DropdownMenuItem>
  );
};
