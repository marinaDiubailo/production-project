/* eslint-disable react/jsx-props-no-spreading */
import { HTMLAttributeAnchorTarget } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { Article } from '../../model/types/article';
import { ArticleViewType } from '../../model/consts/consts';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleViewType;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ArticleListItemRedesigned {...props} />}
            off={<ArticleListItemDeprecated {...props} />}
        />
    );
};
