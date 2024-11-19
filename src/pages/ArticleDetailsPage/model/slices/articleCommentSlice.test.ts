import { ArticleCommentsSchema } from '../types/articleCommentsSchema';
import { articleCommentsReducer } from './articleCommentsSlice';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const comment1 = {
  id: '1',
  user: { id: '1', username: 'admin' },
  text: 'hello',
};
const comment2 = {
  id: '2',
  user: { id: '1', username: 'admin' },
  text: 'hello',
};

const comments = [comment1, comment2];

describe('articleCommentSlice.test', () => {
  test('test fetch comments by article id pending', () => {
    const state: DeepPartial<ArticleCommentsSchema> = {
      isLoading: false,
      error: undefined,
    };
    expect(
      articleCommentsReducer(
        state as ArticleCommentsSchema,
        fetchCommentsByArticleId.pending,
      ),
    ).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test('test fetch comments by article id fulfilled', () => {
    const state: DeepPartial<ArticleCommentsSchema> = {
      isLoading: true,
    };
    expect(
      articleCommentsReducer(
        state as ArticleCommentsSchema,
        fetchCommentsByArticleId.fulfilled(comments, '', '1'),
      ),
    ).toEqual({
      isLoading: false,
      error: undefined,
      ids: [comment1.id, comment2.id],
      entities: {
        [comment1.id]: comment1,
        [comment2.id]: comment2,
      },
    });
  });
});
