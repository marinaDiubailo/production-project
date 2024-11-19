import React, { memo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollPositionByPath, uiActions } from '@/features/UI';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { TestProps } from '@/shared/types/tests';
import cls from './Page.module.scss';

interface PageProps extends TestProps {
  className?: string;
  children: React.ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd, 'data-testid': dataTestId } = props;
  const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollPositionByPath(state, pathname),
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef: undefined,
    cb: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const scrollHandler = useThrottle((event: React.UIEvent<HTMLDivElement>) => {
    dispatch(
      uiActions.setScrollPosition({
        path: pathname,
        position: event.currentTarget.scrollTop,
      }),
    );
  }, 500);

  return (
    <main
      ref={wrapperRef}
      className={classNames(cls['page-redesigned'], {}, [className])}
      onScroll={scrollHandler}
      id={PAGE_ID}
      data-testid={dataTestId ?? 'Page'}
    >
      {children}
      {onScrollEnd ? <div ref={triggerRef} className={cls.trigger} /> : null}
    </main>
  );
});
