import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleViewType } from 'entities/Article';
import { ARTICLE_VIEW_LOCALESTORAGE_KEY } from 'shared/const/localStorage';
import { fetchArticlesList } from '../services/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlePage';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
);

export const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        view: ArticleViewType.SMALL,
        ids: [],
        entities: {},
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleViewType>) => {
            state.view = action.payload;
            localStorage.setItem(
                ARTICLE_VIEW_LOCALESTORAGE_KEY,
                action.payload
            );
        },
        initState: (state) => {
            state.view = localStorage.getItem(
                ARTICLE_VIEW_LOCALESTORAGE_KEY
            ) as ArticleViewType;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticlesList.fulfilled,
                (state, action: PayloadAction<Array<Article>>) => {
                    state.isLoading = false;
                    articlesAdapter.setAll(state, action.payload);
                }
            )
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
