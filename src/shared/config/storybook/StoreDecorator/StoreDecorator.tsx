/* eslint-disable indent */
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleReducer } from '@/entities/Article/testing';
import { addNewCommentReducer } from '@/features/AddNewComment/testing';
import { loginReducer } from '@/features/AuthByUserName/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { articleDetailsReducer } from '@/pages/ArticleDetailsPage/testing';
import { ReducersList } from '../../../lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    article: articleReducer,
    addNewComment: addNewCommentReducer,
    articleDetailsPage: articleDetailsReducer,
};

export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: ReducersList
    ): Decorator =>
    (Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
