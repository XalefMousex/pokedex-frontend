import { type Meta, type StoryObj } from '@storybook/react';

import { Settings } from '.';

const meta = {
  component: Settings,
  title: 'Templates/Settings',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Settings>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    children: 'Settings Template Content',
  },
};
