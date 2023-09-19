/* eslint-disable max-len */
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleViewType } from 'entities/Article';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../../model/slices/articlesPageSlice';
import {
    // getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/getArticlesPageSelectors';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    // const error = useSelector(getArticlesPageError);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlesPageActions.initState());
    });

    const onChangeView = useCallback(
        (view: ArticleViewType) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls['articles-page'], {}, [className])}>
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
