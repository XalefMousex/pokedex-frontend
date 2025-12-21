import { type Meta, type StoryObj } from '@storybook/react';

import { ProfileDropdown } from '.';

const meta = {
  component: ProfileDropdown,
  title: 'Molecules/ProfileDropdown',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProfileDropdown>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
