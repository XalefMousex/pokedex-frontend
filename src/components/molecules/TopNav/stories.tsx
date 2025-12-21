import { type Meta, type StoryObj } from '@storybook/react';

import { TopNav } from '.';

const meta = {
  component: TopNav,
  title: 'Molecules/TopNav',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TopNav>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    links: [{ href: '#', title: 'Link 1', isActive: false, isDisabled: false }],
  },
};
