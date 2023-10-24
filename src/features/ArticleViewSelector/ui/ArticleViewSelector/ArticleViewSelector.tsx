import { memo } from 'react';
import { ArticleViewType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list.svg';
import TiledIcon from '@/shared/assets/icons/tiled.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
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
        <div className={classNames('', {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={changeArticleViewHandler(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        width={24}
                        height={24}
                        className={classNames(
                            '',
                            { [cls['not-selected']]: viewType.view !== view },
                            [className],
                        )}
                    />
                </Button>
            ))}
        </div>
    );
});
