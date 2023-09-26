import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { getArticleData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaerProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    ({ className }: ArticleDetailsPageHeaerProps) => {
        const { t } = useTranslation('article');
        const navigate = useNavigate();
        const canEdit = useSelector(getCanEditArticle);
        const article = useSelector(getArticleData);

        const backToListHandler = useCallback(() => {
            navigate(RoutePath.articles);
        }, [navigate]);

        const editArticleHandler = useCallback(() => {
            navigate(`${RoutePath.article_details}${article?.id}/edit`);
        }, [navigate, article?.id]);

        return (
            <div
                className={classNames(cls['article-details-page-header'], {}, [
                    className,
                ])}
            >
                <Button onClick={backToListHandler}>{t('Back to list')}</Button>
                {canEdit && (
                    <Button
                        className={cls['edit-btn']}
                        onClick={editArticleHandler}
                    >
                        {t('Edit')}
                    </Button>
                )}
            </div>
        );
    }
);
