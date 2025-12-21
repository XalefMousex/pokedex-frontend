import { NextIntlClientProvider } from 'next-intl';

import { type Preview } from '@storybook/react';

import enUS from '../src/translations/locales/en-US.json';

import '../src/styles/global.css';

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    Story => (
      <NextIntlClientProvider locale="en" messages={enUS}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        date: /date$/i,
      },
    },
    options: {
      storySort: {
        locales: 'en-US',
        method: 'alphabetical',
        order: [
          'Home',
          'Tokens',
          'Atoms',
          'Molecules',
          'Organisms',
          'Templates',
        ],
      },
    },
  },
};

export default preview;
