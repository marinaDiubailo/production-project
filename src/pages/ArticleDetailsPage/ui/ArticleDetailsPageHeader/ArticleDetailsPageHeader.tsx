import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
// import { getArticleData } from '@/entities/Article';
import { Button, HStack } from '@/shared/ui';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle';
import { ArticleEditButton } from '@/features/ArticleEditButton';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  ({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    // const article = useSelector(getArticleData);

    const backToListHandler = useCallback(() => {
      navigate(getRouteArticles());
    }, [navigate]);

    // const editArticleHandler = useCallback(() => {
    //     if (article) {
    //         navigate(getRouteArticleEdit(article.id));
    //     }
    // }, [navigate, article]);

    return (
      <HStack justify="between" max className={classNames('', {}, [className])}>
        <Button onClick={backToListHandler}>{t('Back to list')}</Button>
        {canEdit && (
          // <Button onClick={editArticleHandler}>{t('Edit')}</Button>
          <ArticleEditButton />
        )}
      </HStack>
    );
  },
);
