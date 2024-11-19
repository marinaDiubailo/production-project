import { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
  className?: string;
  content: ReactElement;
  right?: ReactElement;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
  const { className, content, right } = props;

  return (
    <div className={classNames(cls.layout, {}, [className])}>
      {right && <div className={cls.right}>{right}</div>}
      <div className={cls.content}>{content}</div>
    </div>
  );
});
