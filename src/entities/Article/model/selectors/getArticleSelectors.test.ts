import { StateSchema } from '@/app/providers/StoreProvider';
import {
  getArticleData,
  getArticleError,
  getArticleIsLoading,
} from './getArticleSelectors';

describe('getArticleSelectors.test', () => {
  test('should return article data', () => {
    const data = {
      id: '1',
      title: 'title',
      subtitle: 'subtitle',
    };

    const state: DeepPartial<StateSchema> = {
      article: {
        data,
      },
    };
    expect(getArticleData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleData(state as StateSchema)).toBe(undefined);
  });

  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        isLoading: true,
      },
    };
    expect(getArticleIsLoading(state as StateSchema)).toBe(true);
  });

  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleIsLoading(state as StateSchema)).toBe(false);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        error: 'error',
      },
    };
    expect(getArticleError(state as StateSchema)).toBe('error');
  });

  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleError(state as StateSchema)).toBe(undefined);
  });
});
