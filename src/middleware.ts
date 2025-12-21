import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';

import { routing } from 'i18n/routing';
import { getSessionCookie } from 'better-auth/cookies';

import { stripLocale } from 'utils/i18n/stripLocale';

const LOGIN_ROUTE = '/';
const ROUTE_WHEN_AUTHENTICATED = '/dashboard';

const publicRoutes = [
  { path: '/', whenAuthenticated: 'redirect' },
  { path: '/offline', whenAuthenticated: 'next' },
  { path: '/session-expired', whenAuthenticated: 'next' },
] as const;

const intlMiddleware = createMiddleware(routing);

export const middleware = async (request: NextRequest) => {
  const sessionCookie = getSessionCookie(request);

  const isAuthenticated = !!sessionCookie;

  const { url, nextUrl } = request;

  const cleanPathname = stripLocale(nextUrl.pathname);

  const publicRoute = publicRoutes.find(route => {
    if (route.path === '/') {
      return cleanPathname === '/';
    }

    return cleanPathname.startsWith(route.path);
  });

  if (publicRoute) {
    if (!isAuthenticated) {
      return intlMiddleware(request);
    }

    if (publicRoute.whenAuthenticated === 'next') {
      return intlMiddleware(request);
    }

    if (publicRoute.whenAuthenticated === 'redirect') {
      const urlClone = nextUrl.clone();

      urlClone.pathname = ROUTE_WHEN_AUTHENTICATED;

      return NextResponse.redirect(urlClone);
    }
  }

  if (isAuthenticated) {
    return intlMiddleware(request);
  }

  const loginUrl = new URL(
    `${LOGIN_ROUTE}?callbackUrl=${stripLocale(nextUrl.pathname + nextUrl.search)}`,
    url,
  );

  return NextResponse.redirect(loginUrl);
};

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
