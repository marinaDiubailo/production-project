import { memo } from 'react';
import { ArticleViewType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIconDeprecated from '@/shared/assets/icons/list.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled.svg';
import ListIcon from '@/shared/assets/icons/redesigned/burger.svg';
import TiledIcon from '@/shared/assets/icons/redesigned/tile.svg';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import cls from './ArticleViewSelector.module.scss';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleViewType;
    onViewClick?: (newView: ArticleViewType) => void;
}

const viewTypes = [
    {
        view: ArticleViewType.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TiledIcon,
            off: () => TiledIconDeprecated,
        }),
    },
    {
        view: ArticleViewType.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
];
export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const changeArticleViewHandler = (newView: ArticleViewType) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    border="round-40"
                    className={classNames(
                        cls['article-view-selector-redesigned'],
                        {},
                        [className],
                    )}
                >
                    <HStack gap="8">
                        {viewTypes.map((viewType) => (
                            <Icon
                                key={viewType.view}
                                Svg={viewType.icon}
                                clickable
                                onClick={changeArticleViewHandler(
                                    viewType.view,
                                )}
                                className={classNames(
                                    '',
                                    {
                                        [cls['not-selected']]:
                                            viewType.view !== view,
                                    },
                                    [className],
                                )}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <div
                    className={classNames(cls['article-view-selector'], {}, [
                        className,
                    ])}
                >
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            key={viewType.view}
                            theme={ButtonTheme.CLEAR}
                            onClick={changeArticleViewHandler(viewType.view)}
                        >
                            <IconDeprecated
                                Svg={viewType.icon}
                                width={24}
                                height={24}
                                className={classNames(
                                    '',
                                    {
                                        [cls['not-selected']]:
                                            viewType.view !== view,
                                    },
                                    [className],
                                )}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    );
});
