/* eslint-disable react/jsx-props-no-spreading */
import { HTMLAttributeAnchorTarget } from 'react';
import { Article } from '../../model/types/article';
import { ArticleViewType } from '../../model/consts/consts';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleViewType;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  return <ArticleListItemRedesigned {...props} />;
};
