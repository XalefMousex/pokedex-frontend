import { type ComponentProps } from 'react';

import { type DirectionProps } from 'stores/useDirectionStore';

export type DirectionIconProps = {
  direction: DirectionProps;
} & ComponentProps<'svg'>;
