import { CircleCheck } from 'lucide-react';
import { Item } from '@radix-ui/react-radio-group';

import { cn } from 'utils/tailwind/cn';

import { type ConfigRadioGroupItemProps } from './types';

export const ConfigRadioGroupItem = ({
  item,
  isTheme = false,
}: ConfigRadioGroupItemProps) => (
  <Item
    className={cn(
      'group cursor-pointer outline-none',
      `transition duration-200 ease-in`,
    )}
    value={item.value}
    aria-describedby={`${item.value}-description`}
    aria-label={`Select ${item.label.toLowerCase()}`}
  >
    <div
      className={cn(
        `
          relative rounded-[6px] ring ring-gray-300
          dark:ring-shark-950
        `,
        `
          group-data-[state=checked]:shadow-2xl
          group-data-[state=checked]:ring-primary-500
          dark:group-data-[state=checked]:ring-primary-500
        `,
        'group-focus-visible:ring-2',
      )}
      role="img"
      aria-hidden="false"
      aria-label={`${item.label} option preview`}
    >
      <CircleCheck
        className={cn(
          `
            absolute top-0 right-0 size-6 translate-x-1/2 -translate-y-1/2
            fill-primary-500 stroke-white transition-all
            group-data-[state=unchecked]:hidden
          `,
        )}
        aria-hidden="true"
      />

      <item.icon
        className={cn(
          !isTheme &&
            `
              fill-primary-500 stroke-primary-500 transition-all
              group-data-[state=unchecked]:fill-neutral-500
              group-data-[state=unchecked]:stroke-neutral-500
              dark:group-data-[state=unchecked]:fill-neutral-400
              dark:group-data-[state=unchecked]:stroke-neutral-400
            `,
        )}
        aria-hidden="true"
      />
    </div>
    <div
      aria-live="polite"
      className="mt-1 text-xs"
      id={`${item.value}-description`}
    >
      {item.label}
    </div>
  </Item>
);
