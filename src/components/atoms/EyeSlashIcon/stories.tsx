import { type Meta, type StoryObj } from '@storybook/react';

import { EyeSlashIcon } from '.';

const meta = {
  component: EyeSlashIcon,
  title: 'Atoms/EyeSlashIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EyeSlashIcon>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
