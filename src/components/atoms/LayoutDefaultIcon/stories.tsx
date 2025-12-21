import { type Meta, type StoryObj } from '@storybook/react';

import { LayoutDefaultIcon } from '.';

const meta = {
  component: LayoutDefaultIcon,
  title: 'Atoms/LayoutDefaultIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LayoutDefaultIcon>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
