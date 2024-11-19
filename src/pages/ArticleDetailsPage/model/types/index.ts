import { ArticleCommentsSchema } from './articleCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from './articleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticleCommentsSchema;
  recommendations: ArticleDetailsRecommendationsSchema;
}
