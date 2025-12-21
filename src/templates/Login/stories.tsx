import { type Meta, type StoryObj } from '@storybook/react';

import { Login } from '.';

const meta = {
  component: Login,
  title: 'Templates/Login',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Login>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
