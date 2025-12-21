import next from '@next/eslint-plugin-next';

import js from '@eslint/js';
import globals from 'globals';
import zod from 'eslint-plugin-zod';
import jest from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';
import unicorn from 'eslint-plugin-unicorn';
import promise from 'eslint-plugin-promise';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import { FlatCompat } from '@eslint/eslintrc';
import storybook from 'eslint-plugin-storybook';
import importPlugin from 'eslint-plugin-import';
import noSecrets from 'eslint-plugin-no-secrets';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import perfectionist from 'eslint-plugin-perfectionist';
import reactCompiler from 'eslint-plugin-react-compiler';
import unusedImports from 'eslint-plugin-unused-imports';
import jestFormatting from 'eslint-plugin-jest-formatting';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';

const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const config = [
  comments.recommended,

  ...compat.extends('airbnb'),
  ...storybook.configs['flat/recommended'],
  ...compat.extends('next/core-web-vitals'),

  {
    ignores: [
      '.next/**',
      '**/sw.js',
      '**/*.mdx',
      '**/cypress',
      '**/coverage',
      '**/generated/**',
      '**/plopfile.mjs',
      '**/storybook-static',
      '**/cypress.config.ts',
    ],
  },

  {
    files: ['**/*.{js,mjs,ts,tsx}'],

    settings: {
      jest: {
        version: 'detect',
      },

      react: {
        version: 'detect',
      },

      'better-tailwindcss': {
        variables: ['data'],
        entryPoint: 'src/styles/global.css',
      },

      'import/resolver': {
        typescript: {},

        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2024,
      sourceType: 'module',

      parserOptions: {
        project: ['tsconfig.eslint.json'],
        ecmaFeatures: {
          jsx: true,
        },
      },

      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.browser,
        ...jest.environments.globals.globals,
        JSX: 'readonly',
        React: 'readonly',
      },
    },

    plugins: {
      zod,
      jest,
      react,
      promise,
      unicorn,
      prettier,
      perfectionist,
      '@next/next': next,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'no-secrets': noSecrets,
      'react-hooks': reactHooks,
      'unused-imports': unusedImports,
      'react-compiler': reactCompiler,
      'jest-formatting': jestFormatting,
      '@typescript-eslint': typescriptEslint,
      'prefer-arrow-functions': preferArrowFunctions,
      'no-relative-import-paths': noRelativeImportPaths,
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },

    rules: {
      quotes: 'off',
      indent: 'off',
      'no-alert': 'off',
      'no-console': 'error',
      'sort-imports': 'off',
      'no-unused-vars': 'off',
      'unicorn/no-null': 'off',
      'no-else-return': 'error',
      'react/jsx-indent': 'off',
      'zod/prefer-enum': 'error',
      'promise/no-native': 'off',
      'no-param-reassign': 'off',
      'consistent-return': 'off',
      'promise/avoid-new': 'warn',
      'react/jsx-no-undef': 'off',
      'operator-linebreak': 'off',
      'jest/valid-expect': 'error',
      'prettier/prettier': 'error',
      'react/jsx-max-depth': 'off',
      'n/no-missing-import': 'off',
      'promise/no-nesting': 'warn',
      'zod/require-strict': 'error',
      'no-inline-comments': 'error',
      'react/jsx-sort-props': 'off',
      'object-curly-newline': 'off',
      'promise/valid-params': 'warn',
      'react/jsx-uses-vars': 'error',
      'no-warning-comments': 'error',
      'react/jsx-no-literals': 'off',
      'promise/param-names': 'error',
      'no-restricted-globals': 'off',
      'function-paren-newline': 'off',
      'react/hook-use-state': 'error',
      'react/jsx-uses-react': 'error',
      'node/no-missing-import': 'off',
      'jest/no-focused-tests': 'error',
      'promise/always-return': 'error',
      'jest/no-disabled-tests': 'warn',
      'react/jsx-curly-newline': 'off',
      'promise/no-return-wrap': 'error',
      'promise/no-new-statics': 'error',
      'react/no-array-index-key': 'off',
      'implicit-arrow-linebreak': 'off',
      'jest/no-identical-title': 'error',
      'promise/catch-or-return': 'error',
      'unicorn/no-keyword-prefix': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-nested-ternary': 'off',
      'import/no-default-export': 'error',
      'react/jsx-no-leaked-render': 'off',
      'node/no-unpublished-import': 'off',
      'jest/prefer-to-have-length': 'warn',
      'react/require-default-props': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'unicorn/no-static-only-class': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/prefer-default-export': 'off',
      'react/prefer-read-only-props': 'off',
      'promise/no-return-in-finally': 'warn',
      'arrow-parens': ['error', 'as-needed'],
      'promise/no-multiple-resolved': 'error',
      'react/jsx-curly-brace-presence': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'promise/no-promise-in-callback': 'warn',
      'promise/no-callback-in-promise': 'warn',
      'react-compiler/react-compiler': 'error',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      'better-tailwindcss/sort-classes': 'error',
      'react/jsx-one-expression-per-line': 'off',
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'react/jsx-no-constructed-context-values': 'off',
      'quote-props': ['error', 'consistent-as-needed'],
      'better-tailwindcss/no-duplicate-classes': 'error',
      'better-tailwindcss/no-restricted-classes': 'error',
      'better-tailwindcss/no-deprecated-classes': 'error',
      'better-tailwindcss/no-conflicting-classes': 'error',
      'jest-formatting/padding-around-test-blocks': 'error',
      'better-tailwindcss/no-unregistered-classes': 'error',
      'better-tailwindcss/enforce-shorthand-classes': 'error',
      'better-tailwindcss/no-unnecessary-whitespace': 'error',
      'jest-formatting/padding-around-describe-blocks': 'error',
      'better-tailwindcss/enforce-consistent-class-order': 'error',
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      'better-tailwindcss/enforce-consistent-line-wrapping': 'error',
      'better-tailwindcss/enforce-consistent-variable-syntax': 'error',
      'better-tailwindcss/enforce-consistent-important-position': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@eslint-community/eslint-comments/no-use': ['error', { allow: [] }],
      'import/consistent-type-specifier-style': ['error', 'prefer-inline'],

      'import/no-duplicates': [
        'error',
        {
          'prefer-inline': true,
        },
      ],

      'better-tailwindcss/multiline': [
        'error',
        {
          group: 'newLine',
        },
      ],

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],

      'react/no-unknown-property': [
        'error',
        {
          ignore: ['positions', 'rotation'],
        },
      ],

      'jsx-a11y/label-has-associated-control': [
        2,
        {
          controlComponents: ['Switch'],
        },
      ],

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],

      'perfectionist/sort-enums': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'perfectionist/sort-exports': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.js', '.ts', '.jsx', '.tsx'],
        },
      ],

      'perfectionist/sort-union-types': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'perfectionist/sort-named-imports': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'perfectionist/sort-named-exports': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'perfectionist/sort-array-includes': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { prefix: '', rootDir: 'src', allowSameFolder: true },
      ],

      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],

      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],

      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          ts: 'never',
          jsx: 'never',
          tsx: 'never',
        },
      ],

      'perfectionist/sort-jsx-props': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
          groups: ['multiline', 'unknown', 'shorthand'],
        },
      ],

      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],

      'lines-between-class-members': [
        'error',
        {
          enforce: [
            {
              prev: 'method',
              next: 'method',
              blankLine: 'always',
            },
          ],
        },
      ],

      'prefer-arrow-functions/prefer-arrow-functions': [
        'error',
        {
          singleReturnOnly: false,
          disallowPrototype: false,
          returnStyle: 'unchanged',
          allowNamedFunctions: false,
          classPropertiesAllowed: false,
        },
      ],

      'no-secrets/no-secrets': [
        'error',
        {
          ignoreContent: [
            'CreateWorkSchedule',
            'ConfigRadioGroupItem',
            'WorkScheduleOverview',
            'DataTableWorkSchedule',
            'OrderByWithRelationInput',
            'SidebarMenuCollapsedDropdown',
          ],
        },
      ],

      'perfectionist/sort-classes': [
        'error',
        {
          order: 'asc',
          type: 'line-length',

          groups: [
            'index-signature',
            'static-property',
            'private-property',
            'property',
            'constructor',
            'static-method',
            'private-method',
            ['get-method', 'set-method'],
            'method',
            'unknown',
          ],
        },
      ],

      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            generateStaticParams: true,
          },

          replacements: {
            ref: {
              reference: false,
            },

            args: {
              arguments: false,
            },

            env: {
              environment: false,
            },

            props: {
              properties: false,
            },
          },
        },
      ],

      'perfectionist/sort-objects': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
          groups: [
            'id',
            'unknown',
            'active',
            'updated_at',
            'created_at',
            'deleted_at',
          ],

          customGroups: {
            id: '^id$',
            active: '^active$',
            updated_at: '^updated_at$',
            created_at: '^created_at$',
            deleted_at: '^deleted_at$',
          },
        },
      ],

      'perfectionist/sort-interfaces': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
          groups: [
            'id',
            'unknown',
            'active',
            'updated_at',
            'created_at',
            'deleted_at',
          ],

          customGroups: {
            id: '^id$',
            active: '^active$',
            updated_at: '^updated_at$',
            created_at: '^created_at$',
            deleted_at: '^deleted_at$',
          },
        },
      ],

      'perfectionist/sort-object-types': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
          groups: [
            'id',
            'unknown',
            'active',
            'updated_at',
            'created_at',
            'deleted_at',
          ],

          customGroups: {
            id: '^id$',
            active: '^active$',
            updated_at: '^updated_at$',
            created_at: '^created_at$',
            deleted_at: '^deleted_at$',
          },
        },
      ],

      'padding-line-between-statements': [
        'error',
        {
          prev: '*',
          next: 'try',
          blankLine: 'always',
        },
        {
          next: '*',
          prev: 'try',
          blankLine: 'always',
        },
        {
          next: '*',
          prev: 'var',
          blankLine: 'always',
        },
        {
          prev: '*',
          next: 'throw',
          blankLine: 'always',
        },
        {
          prev: '*',
          next: 'return',
          blankLine: 'always',
        },
        {
          prev: '*',
          next: 'export',
          blankLine: 'always',
        },
        {
          prev: '*',
          next: 'block-like',
          blankLine: 'always',
        },
        {
          next: '*',
          prev: 'block-like',
          blankLine: 'always',
        },
      ],

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
          types: ['function'],
          selector: 'variable',
          format: ['PascalCase', 'camelCase'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '[A-Z]*Props$',
          },
        },
        {
          selector: 'interface',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '^I[A-Z]',
          },
        },
        {
          types: ['boolean'],
          selector: 'variable',
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
      ],

      'perfectionist/sort-imports': [
        'error',
        {
          order: 'asc',
          type: 'line-length',

          newlinesBetween: 'always',

          internalPattern: ['./schema/*', './types/*', './styles/*'],

          groups: [
            'side-effect',
            'type',
            'next',
            'react',
            'graphql',
            'testing-library',
            'storybook',
            ['builtin', 'external'],
            'app',
            'pages',
            'stores',
            'hooks',
            'contexts',
            'components',
            'services',
            'lib',
            'functions',
            'dtos',
            'helpers',
            'utils',
            'assets',
            'constants',
            'storage',
            'styles',
            'stories',
            'internal',
            'internal-type',
            ['parent-type', 'sibling-type', 'index-type'],
            'style',
            ['parent', 'sibling', 'index'],
            ['internal-styles', 'internal-schema', 'internal-types'],
            'env',
            'object',
            'unknown',
          ],
          customGroups: {
            type: {
              app: ['^app/*'],
              lib: ['^lib/*'],
              env: ['^env/*'],
              dtos: ['^dtos/*'],
              pages: ['^pages/*'],
              hooks: ['^hooks/*'],
              utils: ['^utils/*'],
              stores: ['^stores/*'],
              assets: ['^assets/*'],
              styles: ['^styles/*'],
              helpers: ['^helpers/*'],
              storage: ['^storage/*'],
              stories: ['^stories/*'],
              contexts: ['^contexts/*'],
              services: ['^services/*'],
              functions: ['^functions/*'],
              constants: ['^constants/*'],
              components: ['^components/*'],
              'internal-types': ['./types/*'],
              'internal-styles': ['./styles/*'],
              'internal-schema': ['./schema/*'],
              next: ['^next', '^next-*', '^next/*', '^@next-*'],
              react: ['^react', '^react-*', '^react/*', '^@react-*'],
              storybook: ['^storybook', '^storybook-*', '^@storybook-*'],
              graphql: ['^graphql', '^graphql-*', '^graphql/*', '^@graphql-*'],
              'testing-library': [
                '^testing-library',
                '^testing-library-*',
                '^@testing-library-*',
              ],
            },

            value: {
              app: ['^app/*'],
              lib: ['^lib/*'],
              env: ['^env/*'],
              dtos: ['^dtos/*'],
              pages: ['^pages/*'],
              hooks: ['^hooks/*'],
              utils: ['^utils/*'],
              stores: ['^stores/*'],
              assets: ['^assets/*'],
              styles: ['^styles/*'],
              helpers: ['^helpers/*'],
              storage: ['^storage/*'],
              stories: ['^stories/*'],
              contexts: ['^contexts/*'],
              services: ['^services/*'],
              functions: ['^functions/*'],
              constants: ['^constants/*'],
              components: ['^components/*'],
              'internal-types': ['./types/*'],
              'internal-styles': ['./styles/*'],
              'internal-schema': ['./schema/*'],
              next: ['^next', '^next-*', '^next/*', '^@next-*'],
              react: ['^react', '^react-*', '^react/*', '^@react-*'],
              storybook: ['^storybook', '^storybook-*', '^@storybook-*'],
              graphql: ['^graphql', '^graphql-*', '^graphql/*', '^@graphql-*'],
              'testing-library': [
                '^testing-library',
                '^testing-library-*',
                '^@testing-library-*',
              ],
            },
          },
        },
      ],
    },
  },

  {
    rules: {
      'import/no-default-export': 'off',
    },

    files: [
      'codegen.ts',
      'plopfile.mjs',
      'jest.config.ts',
      '**/stories.tsx',
      'knip.config.ts',
      'apollo.config.ts',
      'src/app/**/*.ts',
      'src/app/**/*.tsx',
      '**/next.config.ts',
      'cypress.config.ts',
      'postcss.config.mjs',
      'release.config.mjs',
      'src/i18n/request.ts',
      'commitlint.config.ts',
    ],
  },

  {
    files: ['**/ModeSwitcher/index.tsx'],

    rules: {
      'jsx-a11y/role-supports-aria-props': 'off',
    },
  },

  {
    files: ['**/stores/**'],

    rules: {
      'unused-imports/no-unused-vars': 'off',
    },
  },

  {
    files: ['**/sw.ts'],
    rules: {
      'no-underscore-dangle': 'off',
    },
  },

  {
    files: ['**/utils/tests/**', '**/next.config.ts', '**/jest.config.ts'],

    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
          types: ['function'],
          selector: 'variable',
          format: ['PascalCase', 'camelCase'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '[A-Z]*Props$',
          },
        },
        {
          selector: 'interface',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '^I[A-Z]',
          },
        },
        {
          types: ['boolean'],
          selector: 'variable',
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
      ],
    },
  },
  {
    files: ['eslint.config.mjs'],

    rules: {
      'quote-props': 'off',
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['**/graphql/queries/**', '**/graphql/mutations/**'],

    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['UPPER_CASE', 'snake_case'],
        },
      ],
    },
  },
  {
    files: ['src/lib/auth.ts'],

    rules: {
      'quote-props': 'off',
      'no-param-reassign': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  {
    rules: {
      'unicorn/filename-case': 'off',
    },

    files: ['src/app/not-found.tsx', 'src/app/global-error.tsx'],
  },

  {
    files: ['**/**.js'],

    rules: {
      'no-undef': 'off',
      'unicorn/prefer-module': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },

  {
    files: ['.storybook/**'],

    rules: {
      'no-param-reassign': 'off',
      'import/no-default-export': 'off',
      'node/no-extraneous-import': 'off',
      'import/no-extraneous-dependencies': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },

  {
    files: ['**/spec.ts', '**/spec.tsx', '**/test.ts', '**/test.tsx'],

    rules: {
      'global-require': 'off',
      'unicorn/prefer-module': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },

  {
    files: ['**/middleware.ts'],

    rules: {
      'no-restricted-exports': 'off',
      'import/no-default-export': 'off',
    },
  },

  {
    files: ['src/app/**/*.tsx', 'src/graphql/**/*.ts'],

    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            generateStaticParams: true,
          },

          replacements: {
            ctx: {
              context: false,
            },

            ref: {
              reference: false,
            },

            env: {
              environment: false,
            },

            props: {
              properties: false,
            },
          },
        },
      ],
    },
  },

  {
    files: ['**/**.d.ts'],

    rules: {
      'no-unused-vars': 'off',
      'import/no-default-export': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',

      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
    },
  },

  {
    files: ['release.config.mjs'],

    rules: {
      'no-template-curly-in-string': 'off',
    },
  },

  {
    files: ['src/dtos/*'],

    rules: {
      'unicorn/filename-case': 'off',

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '[A-Z]*DTO$',
          },
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '[A-Z]*DTO$',
          },
        },
      ],
    },
  },
];

export default config;
