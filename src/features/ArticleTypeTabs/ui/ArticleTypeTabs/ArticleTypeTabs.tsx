import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { ToggleFeatures } from '@/shared/lib/features';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { t } = useTranslation('article');
    const { className, value, onChangeType } = props;

    const typeTabs = useMemo<Array<TabItem<ArticleType>>>(
        () => [
            {
                value: ArticleType.IT,
                content: t('IT'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('ECONOMICS'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('SCIENCE'),
            },
            {
                value: ArticleType.ALL,
                content: t('ALL'),
            },
        ],
        [t],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Tabs
                    direction="column"
                    onTabClick={onChangeType}
                    tabs={typeTabs}
                    value={value}
                    className={classNames('', {}, [className])}
                />
            }
            off={
                <TabsDeprecated
                    onTabClick={onChangeType}
                    tabs={typeTabs}
                    value={value}
                    className={classNames('', {}, [className])}
                />
            }
        />
    );
});
