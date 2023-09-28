/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { VStack } from 'shared/ui/Stack';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { IComment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: IComment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cls['comment-card'], {}, [
                    className,
                    cls.loading,
                ])}
            >
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

    if (!comment) return null;

    return (
        <VStack
            gap='8'
            max
            className={classNames(cls['comment-card'], {}, [className])}
        >
            <AppLink
                to={`${RoutePath.profile}${comment.user.id}`}
                className={cls['comment-header']}
            >
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
            </AppLink>
            <Text text={comment.text} />
        </VStack>
    );
});
