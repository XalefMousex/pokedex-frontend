import { type Meta, type StoryObj } from '@storybook/react';

import { LayoutCompactIcon } from '.';

const meta = {
  component: LayoutCompactIcon,
  title: 'Atoms/LayoutCompactIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LayoutCompactIcon>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
