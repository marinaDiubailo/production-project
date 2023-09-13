import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleBlockType, ArticleSchema, ArticleType } from '../types/article';
import { articleReducer } from './articleSlice';

const data = {
    id: '1',
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
describe('articleSlice.test', () => {
    test('test fetch article by id service pending', () => {
        const state: DeepPartial<ArticleSchema> = {
            isLoading: false,
            error: undefined,
        };
        expect(
            articleReducer(state as ArticleSchema, fetchArticleById.pending)
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
                fetchArticleById.fulfilled(data, '', '1')
            )
        ).toEqual({
            isLoading: false,
            data,
        });
    });
});
