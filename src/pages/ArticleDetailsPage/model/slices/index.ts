import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleCommentsReducer } from './articleCommentsSlice';
import { articleDetailsRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';

export const articleDetailsReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsRecommendationsReducer,
  comments: articleCommentsReducer,
});
