import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ArticleViewType } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleViewType;
}

export const ArticleListItemSkeleton = memo(
    ({ className, view }: ArticleListItemSkeletonProps) => {
        if (view === ArticleViewType.BIG) {
            return (
                <div className={classNames('', {}, [className, cls[view]])}>
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Skeleton width={30} height={30} border="50%" />
                            <Skeleton
                                width={150}
                                height={16}
                                className={cls.username}
                            />
                            <Skeleton
                                width={150}
                                height={16}
                                className={cls.date}
                            />
                        </div>
                        <Skeleton
                            width={250}
                            height={24}
                            className={cls.title}
                        />
                        <Skeleton height={200} className={cls.image} />
                        <div className={cls.footer}>
                            <Skeleton width={200} height={36} />
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls['image-wrapper']}>
                        <Skeleton
                            width={200}
                            height={200}
                            className={cls.image}
                        />
                    </div>
                    <div className={cls['info-wrapper']}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton width={150} height={16} className={cls.title} />
                </Card>
            </div>
        );
    },
);
