import { type Meta, type StoryObj } from '@storybook/react';

import { SheetTitle } from '.';

const meta = {
  component: SheetTitle,
  title: 'Atoms/SheetTitle',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SheetTitle>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
