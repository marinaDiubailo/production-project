import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, Skeleton } from '@/shared/ui';
import { ArticleViewType } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleViewType;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    const mainClass = cls['article-list-item-redesigned'];

    if (view === ArticleViewType.BIG) {
      const cardContent = (
        <>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={150} height={16} className={cls.date} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton height={200} className={cls.image} />
          <div className={cls.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </>
      );
      return (
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
          <Card border="round-m" className={cls.card}>
            {cardContent}
          </Card>
        </div>
      );
    }

    const cardContent = (
      <>
        <Skeleton
          width="100%"
          height={150}
          border="32px"
          className={cls.image}
        />
        <div className={cls['info-wrapper']}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={cls.title} />
      </>
    );

    return (
      <div className={classNames(mainClass, {}, [className, cls[view]])}>
        <Card border="round-s" className={cls.card}>
          {cardContent}
        </Card>
      </div>
    );
  },
);
