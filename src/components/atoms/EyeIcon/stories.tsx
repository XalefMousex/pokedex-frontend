import { type Meta, type StoryObj } from '@storybook/react';

import { EyeIcon } from '.';

const meta = {
  component: EyeIcon,
  title: 'Atoms/EyeIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EyeIcon>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
