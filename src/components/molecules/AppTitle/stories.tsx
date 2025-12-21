import { type Meta, type StoryObj } from '@storybook/react';

import { AppTitle } from '.';

const meta = {
  component: AppTitle,
  title: 'Molecules/AppTitle',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AppTitle>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
