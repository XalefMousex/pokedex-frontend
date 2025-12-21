import { useRef, useEffect } from 'react';

export const useInfiniteScroll = (onLoadMore: () => void, enabled: boolean) => {
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      { rootMargin: '200px' },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [enabled, onLoadMore]);

  return ref;
};
