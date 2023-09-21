import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddNewCommentForm } from 'features/AddNewComment';
import { Button } from 'shared/ui/Button/Button';
import { Page } from 'widgets/Page/ui/Page';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
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
    const navigate = useNavigate();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsisLoading);
    // const error = useSelector(getArticleCommentsError);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    const backToListHandler = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => [dispatch(fetchCommentsByArticleId(id))]);

    if (!id) {
        return (
            <Page
                className={classNames(cls['article-details-page'], {}, [
                    className,
                ])}
            >
                {t('Article not found')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <Page
                className={classNames(cls['article-details-page'], {}, [
                    className,
                ])}
            >
                <Button onClick={backToListHandler}>{t('Back to list')}</Button>
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
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
