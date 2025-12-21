import { cn } from 'utils/tailwind/cn';

import { type MainProps } from './types';

export const Main = ({ isFixed, isFluid, className, ...props }: MainProps) => (
  <main
    className={cn(
      'px-4 py-6',
      {
        'flex grow flex-col overflow-hidden': isFixed,
        '@7xl/content:mx-auto @7xl/content:w-full @7xl/content:max-w-7xl':
          !isFluid,
      },
      className,
    )}
    data-layout={isFixed ? 'fixed' : 'auto'}
    {...props}
  />
);
