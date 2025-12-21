import { type Meta, type StoryObj } from '@storybook/react';

import { ThemeDarkIcon } from '.';

const meta = {
  component: ThemeDarkIcon,
  title: 'Atoms/ThemeDarkIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ThemeDarkIcon>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
