import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getRouteArticleEdit } from '@/shared/const/router';
import { getArticleData } from '@/entities/Article';
import { Button } from '@/shared/ui/redesigned/Button';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';

export const ArticleEditButton = memo(() => {
    const article = useSelector(getArticleData);
    const navigate = useNavigate();
    const { t } = useTranslation('article');

    const editArticleHandler = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [navigate, article]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<Button onClick={editArticleHandler}>{t('Edit')}</Button>}
            off={
                <ButtonDeprecated onClick={editArticleHandler}>
                    {t('Edit')}
                </ButtonDeprecated>
            }
        />
    );
});
