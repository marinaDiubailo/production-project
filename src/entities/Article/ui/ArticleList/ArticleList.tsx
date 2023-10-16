/* eslint-disable i18next/no-literal-string */
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Article } from '../../model/types/article';
import { ArticleViewType } from '../../model/consts/consts';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Array<Article>;
    isLoading?: boolean;
    view?: ArticleViewType;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleViewType) => {
    return new Array(view === ArticleViewType.SMALL ? 9 : 3)
        .fill(0)
        .map((_, index) => (
            <ArticleListItemSkeleton
                view={view}
                key={index}
                className={cls.card}
            />
        ));
};

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleViewType.SMALL,
        target,
    } = props;

    const { t } = useTranslation('article');

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                article={article}
                key={article.id}
                view={view}
                className={cls.card}
                target={target}
            />
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Text title={t('No articles found')} />
            </div>
        );
    }

    return (
        <div
            data-testid='ArticleList'
            className={classNames('', {}, [className, cls[view]])}
        >
            {articles.length ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
