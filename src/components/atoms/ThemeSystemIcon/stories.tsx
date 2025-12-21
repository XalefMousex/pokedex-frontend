import { type Meta, type StoryObj } from '@storybook/react';

import { ThemeSystemIcon } from '.';

const meta = {
  component: ThemeSystemIcon,
  title: 'Atoms/ThemeSystemIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ThemeSystemIcon>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
