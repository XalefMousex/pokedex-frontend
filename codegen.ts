import 'dotenv/config';

import { type CodegenConfig } from '@graphql-codegen/cli';
import {
  JWTResolver,
  UUIDResolver,
  DateTimeResolver,
  EmailAddressResolver,
} from 'graphql-scalars';

const config: CodegenConfig = {
  documents: ['./src/graphql/**/*.ts'],
  hooks: { afterOneFileWrite: 'prettier --write' },
  schema: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  generates: {
    './src/graphql/generated/schema.json': {
      plugins: ['introspection'],
    },
    './src/graphql/generated/index.ts': {
      plugins: [
        'typescript',
        'typescript-msw',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        withHOC: false,
        withHooks: true,
        legacyMode: false,
        skipTypename: true,
        strictScalars: true,
        reactQueryVersion: 5,
        withComponents: false,
        exposeQueryKeys: true,
        addInfiniteQuery: true,
        addSuspenseQuery: true,
        exposeMutationKeys: true,
        notAllowEmptyString: true,
        fetcher: {
          isReactHook: true,
          func: 'graphql/client/client#useClient',
        },
        scalars: {
          URL: 'string',
          Upload: 'File',
          DateTimeISO: 'string',
          JWT: JWTResolver.extensions.codegenScalarType,
          ID: UUIDResolver.extensions.codegenScalarType,
          UUID: UUIDResolver.extensions.codegenScalarType,
          DateTime: DateTimeResolver.extensions.codegenScalarType,
          EmailAddress: EmailAddressResolver.extensions.codegenScalarType,
        },
      },
    },
  },
};

export default config;
