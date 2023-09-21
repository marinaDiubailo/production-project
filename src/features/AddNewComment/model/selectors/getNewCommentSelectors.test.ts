import { StateSchema } from 'app/providers/StoreProvider';
import {
    getAddNewCommentError,
    getAddNewCommentText,
} from './getNewCommentSelectors';

describe('getNewCommentSelectors.test', () => {
    test('should return correct comment text', () => {
        const text = 'Hello, world!';
        const state: DeepPartial<StateSchema> = {
            addNewComment: {
                text,
            },
        };
        expect(getAddNewCommentText(state as StateSchema)).toBe(
            'Hello, world!'
        );
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            addNewComment: {},
        };
        expect(getAddNewCommentText(state as StateSchema)).toBe('');
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addNewComment: {
                error: 'error',
            },
        };
        expect(getAddNewCommentError(state as StateSchema)).toBe('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddNewCommentError(state as StateSchema)).toBe(undefined);
    });
});
