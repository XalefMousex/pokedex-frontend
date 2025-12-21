import { type Meta, type StoryObj } from '@storybook/react';

import { SheetClose } from '.';

const meta = {
  component: SheetClose,
  title: 'Atoms/SheetClose',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SheetClose>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
