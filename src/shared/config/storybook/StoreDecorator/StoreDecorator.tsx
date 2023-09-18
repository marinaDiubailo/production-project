/* eslint-disable indent */
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleReducer } from 'entities/Article/model/slices/articleSlice';
import { profileReducer } from 'entities/Profile';
import { addNewCommentReducer } from 'features/AddNewComment/model/slices/addNewCommentSlice';
import { loginReducer } from 'features/AuthByUserName/model/slices/loginSlice';
import { articleCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleCommentsSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    article: articleReducer,
    addNewComment: addNewCommentReducer,
    articleComments: articleCommentsReducer,
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
