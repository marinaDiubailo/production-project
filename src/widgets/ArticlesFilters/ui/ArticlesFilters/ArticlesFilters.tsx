import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { SortOrder } from '@/shared/types/sort';
import SearchIcon from '@/shared/assets/icons/redesigned/search.svg';
import CloseIcon from '@/shared/assets/icons/redesigned/close.svg';
import cls from './ArticlesFilters.module.scss';
import { Card, Icon, Input, Popover } from '@/shared/ui';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {
    className,
    onChangeType,
    onChangeSearch,
    search,
    onChangeSort,
    sort,
    onChangeOrder,
    order,
    type,
  } = props;
  const { t } = useTranslation('article');

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchVisible = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleChangeSearch = (value: string) => {
    onChangeSearch(value);
    setIsSearchVisible(false);
  };

  return (
    <Card className={classNames(cls.root, {}, [className])}>
      <Input
        className={cls.search}
        onChange={onChangeSearch}
        value={search}
        size="s"
        placeholder={t('Search')}
        addonLeft={<Icon Svg={SearchIcon} />}
      />
      <button
        className={cls.searchButton}
        onClick={handleSearchVisible}
        type={'button'}
      >
        <SearchIcon />
      </button>
      <div className={clsx(cls.searchPanel, isSearchVisible && cls.visible)}>
        <Input
          onChange={handleChangeSearch}
          value={search}
          size="s"
          placeholder={t('Search')}
          addonLeft={<Icon Svg={SearchIcon} />}
        />
        <button
          type={'button'}
          className={cls.closeButton}
          onClick={() => setIsSearchVisible(false)}
        >
          <CloseIcon />
        </button>
      </div>
      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeType}
        className={cls.tabs}
      />
      <Popover
        trigger={
          <button className={cls.filtersButton} type={'button'}>
            {t('Filters')}
          </button>
        }
      >
        <ArticleTypeTabs value={type} onChangeType={onChangeType} />
      </Popover>
      <ArticleSortSelector
        order={order}
        sort={sort}
        onChangeOrder={onChangeOrder}
        onChangeSort={onChangeSort}
        className={cls.sortSelector}
      />
    </Card>
  );
});
