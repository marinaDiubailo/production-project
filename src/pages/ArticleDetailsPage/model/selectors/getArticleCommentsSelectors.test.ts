import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getArticleCommentsisLoading,
    getArticleCommentsError,
} from './getArticleCommentsSelectors';

describe('getArticleCommentsSelectors.test', () => {
    test('should return isLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    isLoading: true,
                },
            },
        };

        expect(getArticleCommentsisLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleCommentsisLoading(state as StateSchema)).toBe(
            undefined,
        );
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    error: 'error',
                },
            },
        };

        expect(getArticleCommentsError(state as StateSchema)).toBe('error');
    });

    test('should work with empty state error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {},
            },
        };

        expect(getArticleCommentsError(state as StateSchema)).toBe(undefined);
    });
});
