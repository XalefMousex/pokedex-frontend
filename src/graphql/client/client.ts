'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

import { ClientError, type Variables } from 'graphql-request';

import { client } from './base';

export const useClient = <TData, TVariables extends Variables>(
  query: string,
  options?: RequestInit['headers'],
): ((variables?: TVariables) => Promise<TData>) => {
  const locale = useLocale();
  const router = useRouter();

  client.setHeader('lang', locale);

  return async (variables?: TVariables) => {
    try {
      return await client.request<TData>(query, variables, options);
    } catch (error) {
      const sessionExpired = ['Session expired', 'Sessão expirada'];

      if (error instanceof ClientError) {
        if (
          error.response.errors?.some(currentError =>
            sessionExpired.includes(currentError.message),
          )
        ) {
          router.push('/session-expired');
        }
      }

      throw error;
    }
  };
};
