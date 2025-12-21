import { createAuthClient } from 'better-auth/react';
import {
  adminClient,
  organizationClient,
  lastLoginMethodClient,
} from 'better-auth/client/plugins';

import { env } from 'env';

const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_API_URL,
  plugins: [adminClient(), organizationClient(), lastLoginMethodClient()],
});

export const { signIn, signUp, signOut, getSession } = authClient;
