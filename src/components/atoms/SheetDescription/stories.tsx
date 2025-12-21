import { type Meta, type StoryObj } from '@storybook/react';

import { SheetDescription } from '.';

const meta = {
  component: SheetDescription,
  title: 'Atoms/SheetDescription',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SheetDescription>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
