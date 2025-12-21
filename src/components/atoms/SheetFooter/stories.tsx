import { type Meta, type StoryObj } from '@storybook/react';

import { SheetFooter } from '.';

const meta = {
  component: SheetFooter,
  title: 'Atoms/SheetFooter',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SheetFooter>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
