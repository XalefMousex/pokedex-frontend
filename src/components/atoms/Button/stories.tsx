import { type Meta, type StoryObj } from '@storybook/react';

import { ArrowRightIcon } from 'lucide-react';

import { Button } from '.';

const allVariants = [
  'label',
  'soft',
  'ghost',
  'link',
  'solid',
  'outline',
] as const;

const allSizes = ['icon', 'small', 'medium', 'large'] as const;

const allColors = [
  'primary',
  'neutral',
  'danger',
  'success',
  'warning',
  'sky',
  'red',
  'lime',
  'teal',
  'cyan',
  'blue',
  'pink',
  'rose',
  'zinc',
  'green',
  'stone',
  'slate',
  'amber',
  'purple',
  'orange',
  'yellow',
  'indigo',
  'violet',
  'emerald',
  'fuchsia',
] as const;

const meta = {
  component: Button,
  title: 'Atoms/Button',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    isLoading: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isFullWidth: {
      control: 'boolean',
    },
    icon: {
      control: { disable: true },
    },
    iconAlign: {
      control: 'select',
      options: ['left', 'right'],
    },
    size: {
      control: 'select',
      options: ['icon', 'small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['label', 'soft', 'ghost', 'link', 'solid', 'outline'],
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
        'red',
        'lime',
        'teal',
        'cyan',
        'blue',
        'pink',
        'rose',
        'zinc',
        'green',
        'stone',
        'slate',
        'amber',
        'purple',
        'orange',
        'yellow',
        'indigo',
        'violet',
        'emerald',
        'fuchsia',
      ],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    size: 'medium',
    color: 'primary',
    variant: 'label',
    isLoading: false,
    isDisabled: false,
    isFullWidth: false,
    children: 'Click Me',
  },
};

export const WithIconLeft: StoryProps = {
  args: {
    size: 'medium',
    color: 'primary',
    variant: 'label',
    iconAlign: 'left',
    isFullWidth: false,
    children: 'Click Me',
    icon: <ArrowRightIcon className="size-5" />,
  },
};

export const WithIconRight: StoryProps = {
  args: {
    size: 'medium',
    color: 'primary',
    variant: 'label',
    iconAlign: 'right',
    isFullWidth: false,
    children: 'Click Me',
    icon: <ArrowRightIcon className="size-5" />,
  },
};

export const Loading: StoryProps = {
  args: {
    size: 'medium',
    isLoading: true,
    color: 'primary',
    variant: 'label',
    iconAlign: 'left',
    children: 'Click Me',
    icon: <ArrowRightIcon className="size-5" />,
  },
};

export const Disabled: StoryProps = {
  args: {
    size: 'medium',
    isDisabled: true,
    color: 'primary',
    variant: 'label',
    iconAlign: 'left',
    children: 'Click Me',
    icon: <ArrowRightIcon className="size-5" />,
  },
};

export const FullWidth: StoryProps = {
  args: {
    size: 'medium',
    color: 'primary',
    variant: 'label',
    iconAlign: 'left',
    isFullWidth: true,
    children: 'Click Me',
    icon: <ArrowRightIcon className="size-5" />,
  },
};

export const Variants: StoryProps = {
  args: {
    size: 'medium',
    color: 'primary',
    iconAlign: 'left',
    children: 'Click Me',
  },
  render: args => (
    <div className="flex flex-col gap-4">
      {allVariants.map(variant => (
        <Button key={variant} {...args} variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Button>
      ))}
    </div>
  ),
};

export const Sizes: StoryProps = {
  args: {
    color: 'primary',
    variant: 'label',
    iconAlign: 'left',
    children: 'Click Me',
    icon: <ArrowRightIcon className="size-5" />,
  },
  render: args => (
    <div className="flex flex-col gap-4">
      {allSizes.map(size => (
        <Button
          key={size}
          {...args}
          icon={
            size === 'icon' ? <ArrowRightIcon className="size-5" /> : args.icon
          }
          size={size}
        >
          {size === 'icon' ? '' : size.charAt(0).toUpperCase() + size.slice(1)}
        </Button>
      ))}
    </div>
  ),
};

export const Colors: StoryProps = {
  args: {
    size: 'medium',
    variant: 'label',
    iconAlign: 'left',
    children: 'Click Me',
  },
  render: args => (
    <div className="flex flex-col gap-4">
      {allColors.map(color => (
        <Button key={color} {...args} color={color}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Button>
      ))}
    </div>
  ),
};
