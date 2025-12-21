import { Separator } from 'components/atoms/Separator';

import { cn } from 'utils/tailwind/cn';

import { type ContentSectionProps } from './types';

export const ContentSection = ({
  title,
  children,
  className,
  description,
  ...props
}: ContentSectionProps) => (
  <div className={cn('flex flex-1 flex-col', className)} {...props}>
    <div className="flex-none">
      <h3 className="text-lg font-medium text-main">{title}</h3>

      <p className="text-sm text-subtitle">{description}</p>
    </div>

    <Separator className="my-4 flex-none" />

    <div className={`size-full overflow-y-auto scroll-smooth pe-4 pb-12`}>
      <div
        className={`
          -mx-1 px-1.5
          lg:max-w-xl
        `}
      >
        {children}
      </div>
    </div>
  </div>
);
