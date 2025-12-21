import { type Meta, type StoryObj } from '@storybook/react';

import { Header } from '.';

const meta = {
  component: Header,
  title: 'Organisms/Header',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Header>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
