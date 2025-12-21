import { Fragment, type ComponentProps } from 'react';

import { type Key } from 'ts-key-enum';

import { cn } from 'utils/tailwind/cn';

import { type KbdProps } from './types';

const DefaultKbdSeparator = ({
  className,
  children = '+',
  ...props
}: ComponentProps<'span'>) => (
  <span
    className={cn(
      `
        text-neutral-500 transition-all
        dark:text-neutral-400
      `,
      className,
    )}
    {...props}
  >
    {children}
  </span>
);

export const Kbd = ({
  children,
  className,
  separator = <DefaultKbdSeparator />,
  ...props
}: KbdProps) => (
  <span
    className={cn(
      `
        inline-flex items-center gap-1 rounded-sm border bg-gray-100 px-1.5
        align-middle font-mono text-[10px] leading-loose font-medium
        text-neutral-500 select-none
        dark:border-white/10 dark:bg-shark-950 dark:text-neutral-400
      `,
      className,
    )}
    {...props}
  >
    {Array.isArray(children)
      ? children.map((child, index) => (
          <Fragment key={index}>
            {child}
            {index < children.length - 1 && separator}
          </Fragment>
        ))
      : children}
  </span>
);

type KbdKeyProps = Omit<ComponentProps<'kbd'>, 'aria-label'> & {
  'aria-label'?: (string & {}) | keyof typeof Key;
};

export const KbdKey = ({ ...props }: KbdKeyProps) => <kbd {...props} />;
