import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { Skeleton } from '@/shared/ui';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation('article');

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useArticleRating({
    userId: userData?.id || '',
    articleId,
  });
  const [rateArticleMutation] = useRateArticle();

  const rating = data?.[0];

  const rateArticleHandler = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? '',
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    [rateArticleMutation, articleId, userData?.id],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      rateArticleHandler(starsCount);
    },
    [rateArticleHandler],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      rateArticleHandler(starsCount, feedback);
    },
    [rateArticleHandler],
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }
  return (
    <RatingCard
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      className={className}
      title={t('Rate the article')}
      feedbackTitle={t('Leave your feedback')}
      hasFeedback
    />
  );
});

export default ArticleRating;
