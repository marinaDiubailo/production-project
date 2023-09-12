import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls['articles-page'], {}, [className])}>
            {t('Articles page')}
        </div>
    );
});

export default ArticlesPage;
