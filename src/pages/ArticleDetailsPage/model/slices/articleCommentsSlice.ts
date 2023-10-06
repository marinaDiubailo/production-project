import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { IComment } from '@/entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleCommentsSchema } from '../types/articleCommentsSchema';

const articleCommentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments =
    articleCommentsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.comments ||
            articleCommentsAdapter.getInitialState()
    );

const articleCommentsSlice = createSlice({
    name: 'articleCommentsSlice',
    initialState: articleCommentsAdapter.getInitialState<ArticleCommentsSchema>(
        {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        }
    ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<Array<IComment>>) => {
                    state.isLoading = false;
                    articleCommentsAdapter.setAll(state, action.payload);
                }
            )
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleCommentsReducer } = articleCommentsSlice;
