import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    ArticleSortField,
    ArticleViewType,
    ArticleType,
} from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { SortOrder } from '@/shared/types/sort';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/getArticlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo(
    ({ className }: ArticlesPageFiltersProps) => {
        const { t } = useTranslation('article');
        const dispatch = useAppDispatch();
        const sort = useSelector(getArticlesPageSort);
        const order = useSelector(getArticlesPageOrder);
        const search = useSelector(getArticlesPageSearch);
        const view = useSelector(getArticlesPageView);
        const type = useSelector(getArticlesPageType);

        const fetchData = useCallback(() => {
            dispatch(fetchArticlesList({ replace: true }));
        }, [dispatch]);

        const debouncesFetchData = useDebounce(fetchData, 500);

        const onChangeView = useCallback(
            (view: ArticleViewType) => {
                dispatch(articlesPageActions.setView(view));
            },
            [dispatch]
        );

        const onChangeOrder = useCallback(
            (order: SortOrder) => {
                dispatch(articlesPageActions.setOrder(order));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData]
        );

        const onChangeSort = useCallback(
            (sort: ArticleSortField) => {
                dispatch(articlesPageActions.setSort(sort));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData]
        );

        const onChangeSearch = useCallback(
            (search: string) => {
                dispatch(articlesPageActions.setSearch(search));
                dispatch(articlesPageActions.setPage(1));
                debouncesFetchData();
            },
            [dispatch, debouncesFetchData]
        );
        const onChangeType = useCallback(
            (value: ArticleType) => {
                dispatch(articlesPageActions.setType(value));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData]
        );

        return (
            <div
                className={classNames(cls['article-page-filters'], {}, [
                    className,
                ])}
            >
                <div className={cls['sort-wrapper']}>
                    <ArticleSortSelector
                        order={order}
                        sort={sort}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ArticleViewSelector
                        view={view}
                        onViewClick={onChangeView}
                    />
                </div>
                <Card className={cls.search}>
                    <Input
                        onChange={onChangeSearch}
                        value={search}
                        placeholder={t('Search')}
                    />
                </Card>
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                />
            </div>
        );
    }
);
