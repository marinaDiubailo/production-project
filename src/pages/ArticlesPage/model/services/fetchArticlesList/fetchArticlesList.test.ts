/* eslint-disable max-len */
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from './fetchArticlesList';

const data = [
  {
    id: '1',
    user: { id: '1', username: 'admin' },
    title: '',
    subtitle: '',
    img: '',
    views: 1,
    createdAt: '',
    type: [],
    blocks: [],
  },
];

describe('fetchArticlesList.test', () => {
  test('sucess articles list fetching', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articlesPage: {
        page: 1,
      },
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk({ replace: true });
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('failed articles list fetching', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articlesPage: {
        page: 1,
      },
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ replace: true });

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
