import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/Select';
import cls from './ArticleSortSelector.module.scss';

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

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
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

    const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(
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
        <div
            className={classNames(cls['article-sort-selector'], {}, [
                className,
            ])}
        >
            <Select
                options={sortFieldOptions}
                label={t('Sort by')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('By')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
});
