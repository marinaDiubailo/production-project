import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleViewType } from 'entities/Article';
import {
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageLimit,
    getArticlesPageView,
    getArticlesPageNum,
    getArticlesPageHasMore,
    getArticlesPageInited,
} from './getArticlesPageSelectors';

describe('getArticlesPageSelectors.test', () => {
    test('should return articles page isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
            },
        };
        expect(getArticlesPageIsLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageIsLoading(state as StateSchema)).toBe(false);
    });

    test('should return articles page error', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'error',
            },
        };
        expect(getArticlesPageError(state as StateSchema)).toBe('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageError(state as StateSchema)).toBe(undefined);
    });
    test('should return articles page limit', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                limit: 3,
            },
        };
        expect(getArticlesPageLimit(state as StateSchema)).toBe(3);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageLimit(state as StateSchema)).toBe(9);
    });
    test('should return articles page view type', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleViewType.BIG,
            },
        };
        expect(getArticlesPageView(state as StateSchema)).toEqual(
            ArticleViewType.BIG
        );
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageView(state as StateSchema)).toEqual(
            ArticleViewType.SMALL
        );
    });
    test('should return articles page number', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                page: 2,
            },
        };
        expect(getArticlesPageNum(state as StateSchema)).toBe(2);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageNum(state as StateSchema)).toBe(1);
    });

    test('should return articles page hasMore', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                hasMore: true,
            },
        };
        expect(getArticlesPageHasMore(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageHasMore(state as StateSchema)).toBe(undefined);
    });

    test('should return articles page inited', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                _inited: true,
            },
        };
        expect(getArticlesPageInited(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageInited(state as StateSchema)).toBe(undefined);
    });
});
