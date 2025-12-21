import { GraphQLClient } from 'graphql-request';

import { env } from 'env';

export const client = new GraphQLClient(`${env.NEXT_PUBLIC_API_URL}/graphql`, {
  credentials: 'include',
});
