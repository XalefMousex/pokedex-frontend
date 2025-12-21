import { type Meta, type StoryObj } from '@storybook/react';

import { SectionTitle } from '.';

const meta = {
  component: SectionTitle,
  title: 'Atoms/SectionTitle',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    title: 'Section Title',
  },
};
