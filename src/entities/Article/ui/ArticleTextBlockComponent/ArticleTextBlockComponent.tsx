import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
}

export const ArticleTextBlockComponent = memo(
    ({ className }: ArticleTextBlockComponentProps) => {
        const { t } = useTranslation();

        return (
            // eslint-disable-next-line i18next/no-literal-string
            <div className={classNames('', {}, [className])}>
                ArticleTextBlockComponent
            </div>
        );
    }
);
