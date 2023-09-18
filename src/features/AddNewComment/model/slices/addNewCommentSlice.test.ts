import { AddNewCommentSchema } from '../types/addNewComment';
import {
    addNewCommentReducer,
    addNewCommentActions,
} from './addNewCommentSlice';

describe('addNewCommentSlice.test', () => {
    test('should set new comment text', () => {
        const text = 'Hello, world!';
        const state: DeepPartial<AddNewCommentSchema> = {
            text: '',
        };
        expect(
            addNewCommentReducer(
                state as AddNewCommentSchema,
                addNewCommentActions.setText(text)
            )
        ).toEqual({ text });
    });
});
