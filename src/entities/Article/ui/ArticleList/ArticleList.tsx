import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleViewType } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Array<Article>;
    isLoading?: boolean;
    view?: ArticleViewType;
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
    } = props;

    if (isLoading) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                article={article}
                key={article.id}
                view={view}
                className={cls.card}
            />
        );
    };

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            {articles.length ? articles.map(renderArticle) : null}
        </div>
    );
});
