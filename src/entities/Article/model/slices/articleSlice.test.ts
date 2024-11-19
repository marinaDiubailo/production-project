/* eslint-disable max-len */
import { ArticleType } from '../consts/consts';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleSchema } from '../types/article';
import { articleReducer } from './articleSlice';

const data = {
  id: '1',
  user: {
    id: '1',
    username: 'admin',
    avatar:
      'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
  },
  title: 'JavaScript news',
  subtitle: 'Что нового в JS за 2023 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1023,
  createdAt: '12.09.2023',
  type: [ArticleType.IT, ArticleType.SCIENCE],
  blocks: [],
};
describe('articleSlice.test', () => {
  test('test fetch article by id service pending', () => {
    const state: DeepPartial<ArticleSchema> = {
      isLoading: false,
      error: undefined,
    };
    expect(
      articleReducer(state as ArticleSchema, fetchArticleById.pending),
    ).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test('test fetch article by id service fulfilled', () => {
    const state: DeepPartial<ArticleSchema> = {
      isLoading: true,
    };
    expect(
      articleReducer(
        state as ArticleSchema,
        fetchArticleById.fulfilled(data, '', '1'),
      ),
    ).toEqual({
      isLoading: false,
      data,
    });
  });
});
