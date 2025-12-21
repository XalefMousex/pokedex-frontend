import { useEffect, type ReactNode } from 'react';

import { DirectionProvider as PrimitiveDirectionProvider } from '@radix-ui/react-direction';

import { useDirectionStore } from 'stores/useDirectionStore';

export const DirectionProvider = ({ children }: { children: ReactNode }) => {
  const { direction } = useDirectionStore();

  useEffect(() => {
    const htmlElement = document.documentElement;

    htmlElement.setAttribute('direction', direction);
  }, [direction]);

  return (
    <PrimitiveDirectionProvider dir={direction}>
      {children}
    </PrimitiveDirectionProvider>
  );
};
