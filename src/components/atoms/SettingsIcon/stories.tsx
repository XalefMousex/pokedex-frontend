import { type Meta, type StoryObj } from '@storybook/react';

import { SettingsIcon } from '.';

const meta = {
  component: SettingsIcon,
  title: 'Atoms/SettingsIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SettingsIcon>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
