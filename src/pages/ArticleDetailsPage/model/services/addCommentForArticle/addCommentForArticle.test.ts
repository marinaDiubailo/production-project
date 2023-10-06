import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { addCommentForArticle } from './addCommentForArticle';

const article = {
    id: '1',
    title: '',
    subtitle: '',
    img: '',
    views: 1,
    createdAt: '',
    type: [],
    blocks: [],
};

const authData = {
    id: '1',
    username: 'admin',
    password: '123',
};
const text = 'text';
const comment = {
    articleId: article.id,
    userId: authData.id,
    text,
};
describe('addCommentForArticle.test', () => {
    test('sucess adding comment for article', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData,
            },
            article: {
                data: article,
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));
        const result = await thunk.callThunk(text);

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(comment);
    });

    test('failed adding comment for article', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData,
            },
            article: {
                data: article,
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk(text);

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
