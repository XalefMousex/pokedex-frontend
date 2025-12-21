import { type Meta, type StoryObj } from '@storybook/react';

import { SheetHeader } from '.';

const meta = {
  component: SheetHeader,
  title: 'Atoms/SheetHeader',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SheetHeader>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
