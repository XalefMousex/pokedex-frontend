import { type Meta, type StoryObj } from '@storybook/react';

import { ThemeLightIcon } from 'components/atoms/ThemeLightIcon';

import { ConfigRadioGroupItem } from '.';

const meta = {
  component: ConfigRadioGroupItem,
  title: 'Atoms/ConfigRadioGroupItem',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ConfigRadioGroupItem>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    item: {
      label: 'Dashboard',
      value: 'dashboard',
      icon: ThemeLightIcon,
    },
  },
};
