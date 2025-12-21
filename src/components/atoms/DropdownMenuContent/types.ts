import { type ComponentProps } from 'react';

import { type Content } from '@radix-ui/react-dropdown-menu';

export type DropdownMenuContentProps = {
  hasArrow?: boolean;
  isDynamicSide?: boolean;
} & ComponentProps<typeof Content>;
