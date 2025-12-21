'use client';

import { motion, AnimatePresence } from 'framer-motion';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { useTooltip } from 'hooks/useTooltip';

import { cn } from 'utils/tailwind/cn';

import { type TooltipContentProps } from './types';

type SideProps = 'top' | 'left' | 'right' | 'bottom';

const getInitialPosition = (side: SideProps) => {
  switch (side) {
    case 'top':
      return { y: 15 };
    case 'bottom':
      return { y: -15 };
    case 'left':
      return { x: 15 };
    case 'right':
      return { x: -15 };

    default:
      return { x: 0, y: 0 };
  }
};

export const TooltipContent = ({
  children,
  className,
  side = 'top',
  arrow = true,
  sideOffset = 4,
  transition = { damping: 25, type: 'spring', stiffness: 300 },
  ...props
}: TooltipContentProps) => {
  const { isOpen } = useTooltip();
  const initialPosition = getInitialPosition(side);

  return (
    <AnimatePresence>
      {isOpen && (
        <TooltipPrimitive.Portal data-slot="tooltip-portal" forceMount>
          <TooltipPrimitive.Content
            side={side}
            className="z-50"
            sideOffset={sideOffset}
            forceMount
            {...props}
          >
            <motion.div
              className={cn(
                `
                  relative z-50 w-fit
                  origin-(--radix-tooltip-content-transform-origin) rounded-md
                  bg-gray-50 px-3 py-1.5 text-sm text-balance text-shark-950
                  shadow-md
                  dark:bg-shark-950 dark:text-white
                `,
                className,
              )}
              key="tooltip-content"
              transition={transition}
              data-slot="tooltip-content"
              animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0, ...initialPosition }}
              initial={{ scale: 0, opacity: 0, ...initialPosition }}
            >
              {children}

              {arrow && (
                <TooltipPrimitive.Arrow
                  className={`
                    size-2.5 translate-y-[calc(-50%-2px)] rotate-45
                    rounded-[2px] bg-gray-50 fill-gray-50
                    dark:bg-shark-950 dark:fill-shark-950
                  `}
                  data-slot="tooltip-content-arrow"
                />
              )}
            </motion.div>
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      )}
    </AnimatePresence>
  );
};
