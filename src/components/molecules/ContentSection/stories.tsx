import { type Meta, type StoryObj } from '@storybook/react';

import { ContentSection } from '.';

const meta = {
  component: ContentSection,
  title: 'Molecules/ContentSection',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ContentSection>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    title: 'Content Section Title',
    description: 'This is a description for the content section.',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};
