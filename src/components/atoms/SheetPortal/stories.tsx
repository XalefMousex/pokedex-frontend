import { type Meta, type StoryObj } from '@storybook/react';

import { SheetPortal } from '.';

const meta = {
  component: SheetPortal,
  title: 'Atoms/SheetPortal',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SheetPortal>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
