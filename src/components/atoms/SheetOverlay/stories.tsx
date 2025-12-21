import { type Meta, type StoryObj } from '@storybook/react';

import { SheetOverlay } from '.';

const meta = {
  component: SheetOverlay,
  title: 'Atoms/SheetOverlay',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SheetOverlay>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
