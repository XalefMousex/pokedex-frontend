import { type Meta, type StoryObj } from '@storybook/react';

import { SheetTrigger } from '.';

const meta = {
  component: SheetTrigger,
  title: 'Atoms/SheetTrigger',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SheetTrigger>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
