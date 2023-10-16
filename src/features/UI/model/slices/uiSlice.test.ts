import { UISchema } from '../types/ui';
import { uiActions, uiReducer } from './uiSlice';

describe('uiSlice.test', () => {
    const scrollPosition = {
        path: 'path',
        position: 200,
    };
    test('test set scroll position', () => {
        const state: DeepPartial<UISchema> = {
            scroll: {
                path: 100,
            },
        };
        expect(
            uiReducer(
                state as UISchema,
                uiActions.setScrollPosition(scrollPosition),
            ),
        ).toEqual({
            scroll: { path: 200 },
        });
    });
});
