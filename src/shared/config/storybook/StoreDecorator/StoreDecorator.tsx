/* eslint-disable indent */
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleReducer } from 'entities/Article/model/slices/articleSlice';

import { addNewCommentReducer } from 'features/AddNewComment/model/slices/addNewCommentSlice';
import { loginReducer } from 'features/AuthByUserName/model/slices/loginSlice';
import { profileReducer } from 'features/EditableProfileCard/model/slices/profileSlice';
import { uiReducer } from 'features/UI';
import { articleDetailsReducer } from 'pages/ArticleDetailsPage/model/slices';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { ReducersList } from '../../../lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    article: articleReducer,
    addNewComment: addNewCommentReducer,
    // articleComments: articleCommentsReducer,
    ui: uiReducer,
    articlesPage: articlesPageReducer,
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
