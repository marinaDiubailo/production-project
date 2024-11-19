import { memo } from 'react';
import { ArticleViewType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/redesigned/burger.svg';
import TiledIcon from '@/shared/assets/icons/redesigned/tile.svg';

import { Icon, Card, HStack } from '@/shared/ui';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleViewType;
  onViewClick?: (newView: ArticleViewType) => void;
}

const viewTypes = [
  {
    view: ArticleViewType.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleViewType.BIG,
    icon: ListIcon,
  },
];
export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const changeArticleViewHandler = (newView: ArticleViewType) => () => {
    onViewClick?.(newView);
  };

  return (
    <Card
      border="round-40"
      className={classNames(cls['article-view-selector-redesigned'], {}, [
        className,
      ])}
    >
      <HStack gap="8">
        {viewTypes.map((viewType) => (
          <Icon
            key={viewType.view}
            Svg={viewType.icon}
            clickable
            onClick={changeArticleViewHandler(viewType.view)}
            className={classNames(
              '',
              {
                [cls['not-selected']]: viewType.view !== view,
              },
              [className],
            )}
          />
        ))}
      </HStack>
    </Card>
  );
});
