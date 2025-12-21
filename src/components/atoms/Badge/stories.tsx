import { type Meta, type StoryObj } from '@storybook/react';

import { StarIcon } from 'lucide-react';

import { Badge } from '.';

const meta = {
  component: Badge,
  tags: ['autodocs'],
  title: 'Atoms/Badge',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['label', 'outline', 'solid'],
    },
    icon: {
      control: 'boolean',
      mapping: {
        false: null,
        true: <StarIcon />,
      },
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'neutral',
        'danger',
        'success',
        'warning',
        'sky',
        'purple',
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'emerald',
        'teal',
        'cyan',
        'blue',
        'indigo',
        'violet',
        'fuchsia',
        'pink',
        'rose',
        'stone',
        'zinc',
        'slate',
        'amber',
      ],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Playground: StoryProps = {
  args: {
    icon: null,
    variant: 'label',
    color: 'primary',
    children: 'Badge',
  },
};

const allVariants = ['label', 'outline', 'solid'] as const;

const allColors = [
  'primary',
  'neutral',
  'danger',
  'success',
  'warning',
  'sky',
  'purple',
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'blue',
  'indigo',
  'violet',
  'fuchsia',
  'pink',
  'rose',
  'stone',
  'zinc',
  'slate',
  'amber',
] as const;

export const AllVariants: StoryProps = {
  render: () => (
    <div className="flex flex-col gap-4 text-sm">
      {allVariants.map(variant => (
        <div key={variant}>
          <p className="mb-1 font-semibold capitalize">{variant}</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              {allColors.map(color => (
                <Badge color={color} variant={variant} key={`${color}-no-icon`}>
                  {color}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {allColors.map(color => (
                <Badge
                  color={color}
                  variant={variant}
                  icon={<StarIcon />}
                  key={`${color}-with-icon`}
                >
                  {color}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};
