import { MutableRefObject, useRef, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
  cb?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef?: MutableRefObject<HTMLElement>;
}
export const useInfiniteScroll = ({
  cb,
  triggerRef,
  wrapperRef,
}: UseInfiniteScrollOptions) => {
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    const wrapperElement = wrapperRef?.current || null;
    const triggerElememt = triggerRef.current;

    if (cb) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) cb();
      }, options);

      observer.current.observe(triggerElememt);
    }

    return () => {
      if (observer.current && triggerElememt) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.current.unobserve(triggerElememt);
      }
    };
  }, [cb, triggerRef, wrapperRef]);
};
