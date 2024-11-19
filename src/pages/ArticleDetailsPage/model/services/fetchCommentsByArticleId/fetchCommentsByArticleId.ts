import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { IComment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  Array<IComment>,
  string | undefined,
  ThunkConfig<string>
>('login/loginByUsername', async (articleId, { rejectWithValue, extra }) => {
  if (!articleId) return rejectWithValue('error');

  try {
    const response = await extra.api.get<Array<IComment>>('/comments', {
      params: {
        articleId,
        _expand: 'user',
      },
    });

    if (!response.data) throw new Error();

    return response.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
