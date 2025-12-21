import { type Meta, type StoryObj } from '@storybook/react';

import { SignOutButton } from '.';

const meta = {
  component: SignOutButton,
  title: 'Atoms/SignOutButton',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SignOutButton>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
