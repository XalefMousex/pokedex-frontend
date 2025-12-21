import { type ComponentProps } from 'react';

import { type motion } from 'framer-motion';

import {
  type AnimationStartProps,
  type AnimationVariantProps,
} from 'styles/theme/animations';

export type ModeSwitcherProps = {
  url?: string;
  start?: AnimationStartProps;
  variant?: AnimationVariantProps;
} & ComponentProps<typeof motion.button>;
