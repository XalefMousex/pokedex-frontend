import { type Meta, type StoryObj } from '@storybook/react';

import { LanguageSelector } from '.';

const meta = {
  component: LanguageSelector,
  title: 'Molecules/LanguageSelector',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LanguageSelector>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};
