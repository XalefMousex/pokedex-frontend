import { type KnipConfig } from 'knip';

const config: KnipConfig = {
  plop: {
    config: ['generators/plopfile.mjs'],
  },
  eslint: {
    entry: ['eslint.config.mjs', 'cypress/eslint.config.mjs'],
  },
  ignore: [
    '**/sw.ts',
    '**/i18n/**',
    '**/graphql/**',
    '**/generated/**',
    '**/functions/**',
    'apollo.config.ts',
    'cypress/support/index.d.ts',
    'src/actions/users/createUser.ts',
  ],
  ignoreDependencies: [
    'sharp',
    'ts-node',
    'polished',
    'tailwind-variants',
    'eslint-config-next',
    'tailwindcss-animate',
    'eslint-config-airbnb',
    'eslint-import-resolver-typescript',
  ],
};

export default config;
