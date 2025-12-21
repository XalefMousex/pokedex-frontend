import { cn } from 'utils/tailwind/cn';

import { type AlertDescriptionProps } from './types';

export const AlertDescription = ({
  className,
  ...props
}: AlertDescriptionProps) => (
  <div
    className={cn(
      `
        col-start-2 grid justify-items-start gap-1 text-sm text-subtitle
        [&_p]:leading-relaxed
      `,
      className,
    )}
    data-slot="alert-description"
    {...props}
  />
);
