import { type Meta, type StoryObj } from '@storybook/react';

import { SheetContent } from '.';

const meta = {
  component: SheetContent,
  title: 'Atoms/SheetContent',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SheetContent>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
