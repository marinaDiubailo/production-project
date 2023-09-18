import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddNewCommentForm } from 'features/AddNewComment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articleCommentsReducer,
    getArticleComments,
} from '../../model/slices/articleCommentsSlice';
import {
    // getArticleCommentsError,
    getArticleCommentsisLoading,
} from '../../model/selectors/getArticleCommentsSelectors';
import cls from './ArticleDetailsPage.module.scss';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleComments: articleCommentsReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsisLoading);
    // const error = useSelector(getArticleCommentsError);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    useInitialEffect(() => [dispatch(fetchCommentsByArticleId(id))]);

    if (!id) {
        return (
            <div
                className={classNames(cls['article-details-page'], {}, [
                    className,
                ])}
            >
                {t('Article not found')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div
                className={classNames(cls['article-details-page'], {}, [
                    className,
                ])}
            >
                <ArticleDetails id={id} />
                <Text
                    className={cls['comment-title']}
                    title={t('Comments')}
                />
                <AddNewCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
