import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent = memo(
    ({ className }: ArticleCodeBlockComponentProps) => {
        const { t } = useTranslation();

        return (
            // eslint-disable-next-line i18next/no-literal-string
            <div className={classNames('', {}, [className])}>
                ArticleCodeBlockComponent
            </div>
        );
    }
);
