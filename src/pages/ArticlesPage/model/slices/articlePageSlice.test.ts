import { ArticleViewType } from 'entities/Article';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlePage';
import { articlesPageActions, articlesPageReducer } from './articlesPageSlice';

const article = {
    id: '1',
    user: { id: '1', username: 'admin' },
    title: '',
    subtitle: '',
    img: '',
    views: 1,
    createdAt: '',
    type: [],
    blocks: [],
};
const articles = new Array(3).fill(0).map((_, index) => {
    return {
        ...article,
        id: String(index),
    };
});

const entities = Object.fromEntries(
    articles.map((article) => [[article.id], { ...article }])
);
describe('articlePageSlice.test', () => {
    test('test set view', () => {
        const viewType = ArticleViewType.SMALL;
        const state: DeepPartial<ArticlesPageSchema> = {
            view: ArticleViewType.BIG,
        };
        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                articlesPageActions.setView(viewType)
            )
        ).toEqual({ view: viewType });
    });

    test('test get page', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            page: 3,
        };
        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                articlesPageActions.setPage(4)
            )
        ).toEqual({ page: 4 });
    });

    test('test init state', () => {
        const view = ArticleViewType.SMALL;
        const state: DeepPartial<ArticlesPageSchema> = {
            view,
            _inited: false,
        };
        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                articlesPageActions.initState()
            )
        ).toEqual({ limit: 9, view, _inited: true });
    });

    test('test fetch articles list pending', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            isLoading: false,
            error: undefined,
        };
        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                fetchArticlesList.pending
            )
        ).toEqual({ isLoading: true, error: undefined });
    });

    test('test fetch articles list fulfilled', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            isLoading: true,
            entities,
        };
        expect(
            articlesPageReducer(
                state as ArticlesPageSchema,
                fetchArticlesList.fulfilled(articles, '', { page: 1 })
            )
        ).toEqual({
            hasMore: true,
            isLoading: false,
            entities,
        });
    });
});
