import { type Meta, type StoryObj } from '@storybook/react';

import { LayoutFullIcon } from '.';

const meta = {
  component: LayoutFullIcon,
  title: 'Atoms/LayoutFullIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LayoutFullIcon>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
