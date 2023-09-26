import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { Text, TextSize } from 'shared/ui/Text/Text';
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
import { getArticleComments } from '../../model/slices/articleCommentsSlice';
import { getArticleCommentsisLoading } from '../../model/selectors/getArticleCommentsSelectors';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleDetailsRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleDetailsRecommendationsIsLoading } from '../../model/selectors/getArticleRecommendationsSelectors';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsReducer } from '../../model/slices';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsisLoading);
    const recommendations = useSelector(
        getArticleDetailsRecommendations.selectAll
    );
    const recommendationsIsLoading = useSelector(
        getArticleDetailsRecommendationsIsLoading
    );
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

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

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
                    title={t('Recommendations')}
                    size={TextSize.L}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                    target='_blank'
                />
                <Text
                    className={cls['comment-title']}
                    title={t('Comments')}
                    size={TextSize.L}
                />
                <AddNewCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
