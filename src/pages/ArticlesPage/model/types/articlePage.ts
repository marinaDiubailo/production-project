import { EntityState } from '@reduxjs/toolkit';
import {
    Article,
    ArticleSortField,
    ArticleViewType,
    ArticleType,
} from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    _inited: boolean;
    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: ArticleViewType;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
}
