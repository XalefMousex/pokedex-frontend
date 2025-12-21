import { type ComponentProps } from 'react';

type LinkProps = {
  href: string;
  title: string;
  isActive: boolean;
  isDisabled?: boolean;
};

export type TopNavProps = {
  links: LinkProps[];
} & ComponentProps<'div'>;
