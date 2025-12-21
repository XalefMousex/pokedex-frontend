'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getLocale } from 'next-intl/server';

import { ClientError, GraphQLClient, type Variables } from 'graphql-request';

import { env } from 'env';

export const server = async <TData, TVariables extends Variables>(
  query: string,
  variables?: TVariables,
): Promise<TData> => {
  const client = new GraphQLClient(`${env.NEXT_PUBLIC_API_URL}/graphql`, {
    headers: await headers(),
  });

  const locale = await getLocale();

  client.setHeader('lang', locale);

  try {
    const response = await client.rawRequest<TData, TVariables>(
      query,
      variables,
    );

    return response.data;
  } catch (error) {
    const sessionExpired = ['Session expired', 'Sessão expirada'];

    if (error instanceof ClientError) {
      if (
        error.response.errors?.some(currentError =>
          sessionExpired.includes(currentError.message),
        )
      ) {
        redirect('/session-expired');
      }
    }

    throw error;
  }
};
