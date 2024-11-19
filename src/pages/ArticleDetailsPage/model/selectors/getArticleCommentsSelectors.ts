import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleCommentsisLoading = (state: StateSchema) =>
  state.articleDetailsPage?.comments.isLoading;
export const getArticleCommentsError = (state: StateSchema) =>
  state.articleDetailsPage?.comments.error;
