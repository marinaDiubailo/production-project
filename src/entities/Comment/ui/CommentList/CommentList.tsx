import { IComment } from 'entities/Comment/model/types/comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Array<IComment>;
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls['comment-list'], {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        className={cls.comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text text={t('No comments')} />
            )}
        </div>
    );
});
