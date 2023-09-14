import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsisLoading = (state: StateSchema) =>
    state.articleComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) =>
    state.articleComments?.error;
