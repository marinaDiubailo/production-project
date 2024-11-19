import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';
import { VStack } from '@/shared/ui';
import cls from './ScrollToolbar.module.scss';

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
  const { className } = props;

  return (
    <VStack
      justify="center"
      align="center"
      max
      className={classNames(cls['scroll-toolbar'], {}, [className])}
    >
      <ScrollToTopButton />
    </VStack>
  );
});
