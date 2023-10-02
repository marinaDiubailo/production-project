import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
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

        if (isLoading || error) return null;

        return (
            <VStack
                gap='8'
                className={classNames('', {}, [className])}
            >
                <Text
                    title={t('Recommendations')}
                    size={TextSize.L}
                />
                <ArticleList
                    articles={articles}
                    target='_blank'
                />
            </VStack>
        );
    }
);
