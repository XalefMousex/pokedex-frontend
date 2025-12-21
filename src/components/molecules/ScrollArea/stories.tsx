import { type Meta, type StoryObj } from '@storybook/react';

import { ScrollArea } from '.';

const meta = {
  component: ScrollArea,
  title: 'Molecules/ScrollArea',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
