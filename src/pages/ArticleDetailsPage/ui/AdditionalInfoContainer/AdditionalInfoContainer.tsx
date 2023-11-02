import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getArticleData } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AdditionalInfoContainer.module.scss';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle';

interface AdditionalInfoContainerProps {
    className?: string;
}

export const AdditionalInfoContainer = memo(
    (props: AdditionalInfoContainerProps) => {
        const { className } = props;
        const article = useSelector(getArticleData);
        const canEdit = useSelector(getCanEditArticle);

        if (!article) return null;

        return (
            <Card
                padding="24"
                border="round-20"
                className={classNames(cls['additional-info-container'], {}, [
                    className,
                ])}
            >
                <ArticleAdditionalInfo
                    className={className}
                    author={article.user}
                    createdAt={article.createdAt}
                    views={article.views}
                    canEdit={canEdit}
                />
            </Card>
        );
    },
);
