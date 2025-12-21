'use client';

import { ThemeProvider } from 'next-themes';

import { useMediaQuery } from 'react-responsive';
import { useEffect, type ReactNode } from 'react';

import { ToastProvider } from 'providers/ToastProvider';
import { ShortcutProvider } from 'providers/ShortcutProvider';
import { DirectionProvider } from 'providers/DirectionProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { useSidebarStore } from 'stores/useSidebarStore';

import { TooltipProvider } from 'components/atoms/TooltipProvider';

import { MOBILE_BREAKPOINT } from 'constants/mobile';

const makeQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

let browserQueryClient: undefined | QueryClient;

const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient();
  }

  if (!browserQueryClient) browserQueryClient = makeQueryClient();

  return browserQueryClient;
};

export const Providers = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient();

  const { setIsMobile } = useSidebarStore();

  const isMobile = useMediaQuery({
    query: `(max-width: ${MOBILE_BREAKPOINT - 1}px)`,
  });

  useEffect(() => {
    setIsMobile(isMobile);
  }, [isMobile]);

  return (
    <ShortcutProvider>
      <DirectionProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryStreamedHydration>
            <ThemeProvider attribute="class" enableSystem>
              <TooltipProvider delayDuration={0}>{children}</TooltipProvider>

              <ToastProvider />
              <ReactQueryDevtools initialIsOpen={false} />
            </ThemeProvider>
          </ReactQueryStreamedHydration>
        </QueryClientProvider>
      </DirectionProvider>
    </ShortcutProvider>
  );
};
