import { memo, Suspense, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { CommentList } from '@/entities/Comment';
import { AddNewCommentForm } from '@/features/AddNewComment';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TextSize, Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Loader } from '@/shared/ui/Loader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticleCommentsisLoading } from '../../model/selectors/getArticleCommentsSelectors';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slices/articleCommentsSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo(
    ({ className, id }: ArticleDetailsCommentsProps) => {
        const { t } = useTranslation('article');
        const dispatch = useAppDispatch();

        const comments = useSelector(getArticleComments.selectAll);
        const commentsIsLoading = useSelector(getArticleCommentsisLoading);
        // const error = useSelector(getArticleCommentsError);

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text));
            },
            [dispatch]
        );

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        });

        return (
            <VStack
                gap='8'
                max
                className={classNames('', {}, [className])}
            >
                <Text
                    title={t('Comments')}
                    size={TextSize.L}
                />
                <Suspense fallback={<Loader />}>
                    <AddNewCommentForm onSendComment={onSendComment} />
                </Suspense>
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </VStack>
        );
    }
);
