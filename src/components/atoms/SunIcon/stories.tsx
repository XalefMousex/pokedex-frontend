import { type Meta, type StoryObj } from '@storybook/react';

import { SunIcon } from '.';

const meta = {
  component: SunIcon,
  title: 'Atoms/SunIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SunIcon>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
