import { type Meta, type StoryObj } from '@storybook/react';

import { ThemeLightIcon } from '.';

const meta = {
  component: ThemeLightIcon,
  title: 'Atoms/ThemeLightIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ThemeLightIcon>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
