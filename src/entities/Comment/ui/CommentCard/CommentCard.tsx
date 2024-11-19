/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  AppLink,
  Avatar,
  Card,
  HStack,
  Skeleton,
  Text,
  VStack,
} from '@/shared/ui';
import { IComment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
  className?: string;
  comment?: IComment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <VStack
        data-testid="CommentCard.Loading"
        gap="8"
        max
        className={classNames(cls['comment-card'], {}, [
          className,
          cls.loading,
        ])}
      >
        <div className={cls['comment-header']}>
          <Skeleton width={30} height={30} border={'50%'} />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton width={'100%'} height={50} className={cls.text} />
      </VStack>
    );
  }

  if (!comment) return null;

  return (
    <Card max border="round-40" padding="24">
      <VStack
        data-testid="CommentCard.Content"
        gap="8"
        max
        className={classNames(cls['comment-card-redesigned'], {}, [className])}
      >
        <AppLink to={getRouteProfile(comment.user.id)}>
          <HStack gap="8">
            {comment.user.avatar ? (
              <Avatar size={30} src={comment.user.avatar} />
            ) : null}
            <Text text={comment.user.username} bold />
          </HStack>
        </AppLink>
        <Text text={comment.text} />
      </VStack>
    </Card>
  );
});
