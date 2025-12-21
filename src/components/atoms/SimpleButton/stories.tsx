import { type Meta, type StoryObj } from '@storybook/react';

import { SimpleButton } from '.';

const meta = {
  component: SimpleButton,
  title: 'Atoms/SimpleButton',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SimpleButton>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
