/* eslint-disable max-len */
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleType, ArticleBlockType } from '../../types/article';
import { fetchArticleById } from './fetchArticleById';

describe('fetchArticleById.test', () => {
    test('sucess article fetching', async () => {
        const data = {
            id: '1',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
            },
            title: 'title',
            subtitle: 'subtitle',
            img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
            views: 1023,
            createdAt: '12.09.2023',
            type: [ArticleType.IT, ArticleType.SCIENCE],
            blocks: [
                {
                    id: '1',
                    type: ArticleBlockType.TEXT,
                    title: 'Заголовок этого блока',
                    paragraphs: ['Программа'],
                },
            ],
        };
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('failed fetching article', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
