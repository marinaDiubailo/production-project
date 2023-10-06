import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
    Array<Article>,
    void,
    ThunkConfig<string>
>(
    'articleDetailsPage/fetchArticleRecommendations',
    async (_, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<Array<Article>>('/articles', {
                params: {
                    _limit: 4,
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
