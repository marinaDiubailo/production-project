import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams.test', () => {
  test('should return a string with a single query parameter', () => {
    const params = {
      test: 'value',
    };
    const result = getQueryParams(params);
    expect(result).toBe('?test=value');
  });

  test('should return a string with multiple params', () => {
    const params = {
      test: 'value',
      test2: 'value2',
      test3: 'value3',
    };
    const result = getQueryParams(params);
    expect(result).toBe('?test=value&test2=value2&test3=value3');
  });

  test('should ignore undefined values in params', () => {
    const params = {
      test: 'value',
      test2: undefined,
    };
    const result = getQueryParams(params);
    expect(result).toBe('?test=value');
  });

  // eslint-disable-next-line max-len
  test('should return a string with a single query parameter when the value of a key in params is an empty string', () => {
    const params = {
      test: '',
    };
    const result = getQueryParams(params);
    expect(result).toBe('?test=');
  });
});
