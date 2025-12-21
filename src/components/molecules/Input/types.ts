import { type ElementType, type ComponentProps } from 'react';

type LabelTypeProps = 'default' | 'floating';

export type InputProps = {
  label?: string;
  animate?: boolean;
  className?: string;
  icon?: ElementType;
  isDisabled?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
  isFullWidth?: boolean;
  labelClassName?: string;
  isShowRequired?: boolean;
  labelType?: LabelTypeProps;
  containerClassName?: string;
} & ComponentProps<'input'>;
