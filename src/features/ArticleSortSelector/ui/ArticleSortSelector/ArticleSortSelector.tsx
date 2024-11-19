import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { ListBox, type ListBoxItem } from '@/shared/ui';

import s from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSortField: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation('article');

  const orderOptions = useMemo<Array<ListBoxItem<SortOrder>>>(
    () => [
      {
        value: 'asc',
        content: t('Ascending'),
      },
      {
        value: 'desc',
        content: t('Descending'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<Array<ListBoxItem<ArticleSortField>>>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('Date of creation'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('Title'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('Number of views'),
      },
    ],
    [t],
  );

  return (
    <div className={classNames(s.sortSelector, {}, [className])}>
      <span className={s.label}>{t('Sort by')}</span>
      <ListBox items={sortFieldOptions} value={sort} onChange={onChangeSort} />
      <ListBox items={orderOptions} value={order} onChange={onChangeOrder} />
    </div>
  );
});
