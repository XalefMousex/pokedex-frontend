import { type Meta, type StoryObj } from '@storybook/react';

import { NavGroup } from '.';

const meta = {
  component: NavGroup,
  title: 'Molecules/NavGroup',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavGroup>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    title: 'NavGroup Title',
    items: [{ title: 'NavGroup Item 1' }],
  },
};
