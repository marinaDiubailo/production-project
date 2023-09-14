/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { IComment } from 'entities/Comment/model/types/comment';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: IComment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls['comment-card'], {}, [className])}>
                <div className={cls['comment-header']}>
                    <Skeleton
                        width={30}
                        height={30}
                        border={'50%'}
                    />
                    <Skeleton
                        width={100}
                        height={16}
                        className={cls.username}
                    />
                </div>
                <Skeleton
                    width={'100%'}
                    height={50}
                    className={cls.text}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls['comment-card'], {}, [className])}>
            <div className={cls['comment-header']}>
                {comment.user.avatar ? (
                    <Avatar
                        size={30}
                        src={comment.user.avatar}
                    />
                ) : null}
                <Text
                    title={comment.user.username}
                    className={cls.username}
                />
            </div>
            <Text
                text={comment.text}
                className={cls.text}
            />
        </div>
    );
});
