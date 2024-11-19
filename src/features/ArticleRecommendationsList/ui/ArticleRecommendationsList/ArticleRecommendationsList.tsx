import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const {
      data: articles,
      isLoading,
      error,
    } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) return null;

    return (
      <div
        style={{ width: '100%' }}
        data-testid="ArticleRecommendationsList"
        className={classNames('', {}, [className])}
      >
        <Text title={t('Recommendations')} size="l" />
        <ArticleList articles={articles} target="_blank" />
      </div>
    );
  },
);
