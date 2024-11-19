import { ArticleSortField, ArticleType } from '@/entities/Article';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
  test('sucсess initialization of articles page', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      },
    });
    await thunk.callThunk(new URLSearchParams());

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toBeCalledWith({});
  });

  test('sucсess initialization of articles page with search paraps', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      },
    });
    await thunk.callThunk(
      new URLSearchParams([
        ['order', 'asc'],
        ['sort', ArticleSortField.VIEWS],
        ['type', ArticleType.IT],
      ]),
    );

    expect(thunk.dispatch).toBeCalledTimes(7);
    expect(fetchArticlesList).toBeCalledWith({});
  });

  test('should not init', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: true,
      },
    });
    await thunk.callThunk(new URLSearchParams());

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
