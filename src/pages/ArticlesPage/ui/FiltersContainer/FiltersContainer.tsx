import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const {
        search,
        type,
        order,
        sort,
        onChangeSearch,
        onChangeType,
        onChangeOrder,
        onChangeSort,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            className={className}
            search={search}
            type={type}
            order={order}
            sort={sort}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
        />
    );
});
