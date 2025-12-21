import { type Meta, type StoryObj } from '@storybook/react';

import { ConfigDrawer } from '.';

const meta = {
  component: ConfigDrawer,
  title: 'Organisms/ConfigDrawer',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ConfigDrawer>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
