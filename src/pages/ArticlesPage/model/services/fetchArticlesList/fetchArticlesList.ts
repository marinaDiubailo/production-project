import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/getArticlesPageSelectors';

interface fetchArticlesListProps {
    page: number;
}
export const fetchArticlesList = createAsyncThunk<
    Array<Article>,
    fetchArticlesListProps,
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    async ({ page = 1 }, { rejectWithValue, extra, getState }) => {
        const limit = getArticlesPageLimit(getState());

        try {
            const response = await extra.api.get<Array<Article>>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
