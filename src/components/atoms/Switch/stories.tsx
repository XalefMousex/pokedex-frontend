import { type Meta, type StoryObj } from '@storybook/react';

import { Switch } from '.';

const meta = {
  component: Switch,
  title: 'Atoms/Switch',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Switch>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
