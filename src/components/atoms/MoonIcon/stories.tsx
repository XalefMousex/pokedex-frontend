import { type Meta, type StoryObj } from '@storybook/react';

import { MoonIcon } from '.';

const meta = {
  component: MoonIcon,
  title: 'Atoms/MoonIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MoonIcon>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
