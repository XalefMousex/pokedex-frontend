import { type StorybookConfig } from '@storybook/nextjs-vite';

export const title = 'Simba RH Onboard';

const config: StorybookConfig = {
  staticDirs: ['../public'],
  framework: {
    options: {},
    name: '@storybook/nextjs-vite',
  },
  stories: [
    '../src/stories/**/**.mdx',
    '../src/templates/**/stories.tsx',
    '../src/components/**/stories.tsx',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
};

export default config;
