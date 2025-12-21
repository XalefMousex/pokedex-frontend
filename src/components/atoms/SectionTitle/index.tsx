import { RotateCcw } from 'lucide-react';

import { SimpleButton } from 'components/atoms/SimpleButton';

import { cn } from 'utils/tailwind/cn';

import { type SectionTitleProps } from './types';

export const SectionTitle = ({
  title,
  onReset,
  className,
  showReset = false,
  ...props
}: SectionTitleProps) => (
  <div
    className={cn(
      `
        mb-2 flex items-center gap-2 text-sm font-semibold text-shark-950
        transition-all
        dark:text-white
      `,
      className,
    )}
    {...props}
  >
    {title}
    {showReset && onReset && (
      <SimpleButton
        size="icon"
        onClick={onReset}
        variant="secondary"
        className="size-4 rounded-full"
      >
        <RotateCcw className="size-3" />
      </SimpleButton>
    )}
  </div>
);
