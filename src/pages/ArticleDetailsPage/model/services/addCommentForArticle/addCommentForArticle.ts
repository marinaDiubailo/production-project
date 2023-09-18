import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleData } from 'entities/Article';
import { IComment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    IComment,
    string,
    ThunkConfig<string>
>(
    'article/addCommentForArticle',
    async (text, { dispatch, rejectWithValue, extra, getState }) => {
        const userData = getUserAuthData(getState());
        const article = getArticleData(getState());

        if (!userData || !text || !article) return rejectWithValue('error');

        try {
            const response = await extra.api.post<IComment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) throw new Error();

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
