import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollPosition, getScrollPositionByPath } from './getUISelectors';

describe('getUISelectors.test', () => {
  test('should return scroll position', () => {
    const state: DeepPartial<StateSchema> = {
      ui: {
        scroll: {
          path: 100,
        },
      },
    };
    expect(getScrollPosition(state as StateSchema)).toEqual({ path: 100 });
  });

  test('should return scroll position for path', () => {
    const state: DeepPartial<StateSchema> = {
      ui: {
        scroll: {
          path: 100,
        },
      },
    };
    expect(getScrollPositionByPath(state as StateSchema, 'path')).toEqual(100);
  });
});
