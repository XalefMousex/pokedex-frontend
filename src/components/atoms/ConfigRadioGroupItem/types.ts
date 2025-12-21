import { type ReactElement, type ComponentProps } from 'react';

type ItemProps = {
  value: string;
  label: string;
  icon: (props: ComponentProps<'svg'>) => ReactElement;
};

export type ConfigRadioGroupItemProps = {
  item: ItemProps;
  isTheme?: boolean;
} & ComponentProps<'div'>;
