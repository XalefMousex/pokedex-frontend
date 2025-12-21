import { type Meta, type StoryObj } from '@storybook/react';

import { CollapsibleContent } from '.';

const meta = {
  component: CollapsibleContent,
  title: 'Atoms/CollapsibleContent',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CollapsibleContent>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
