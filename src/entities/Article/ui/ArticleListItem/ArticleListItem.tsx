import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleViewType, ArticleBlockType } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';

interface ArticleListiIemProps {
    className?: string;
    article: Article;
    view: ArticleViewType;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListiIemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation('article');

    const types = (
        <Text
            text={article.type.join(', ')}
            className={cls.types}
        />
    );

    const views = (
        <>
            <Text
                text={String(article.views)}
                className={cls.views}
            />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleViewType.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock;

        return (
            <div
                className={classNames(cls['article-list-item'], {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card>
                    <div className={cls.header}>
                        <Avatar
                            size={30}
                            src={article.user.avatar}
                        />
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />
                        <Text
                            text={article.createdAt}
                            className={cls.date}
                        />
                    </div>
                    <Text
                        title={article.title}
                        className={cls.title}
                    />
                    {types}
                    <img
                        src={article.img}
                        alt={article.title}
                        className={cls.image}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls['text-block']}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            to={RoutePath.article_details + article.id}
                            target={target}
                        >
                            <Button>{t('Read more')}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames(cls['article-list-item'], {}, [
                className,
                cls[view],
            ])}
        >
            <Card>
                <div className={cls['image-wrapper']}>
                    <img
                        src={article.img}
                        alt={article.title}
                        className={cls.image}
                    />
                    <Text
                        text={article.createdAt}
                        className={cls.date}
                    />
                </div>
                <div className={cls['info-wrapper']}>
                    {types}
                    {views}
                </div>
                <Text
                    text={article.title}
                    className={cls.title}
                />
            </Card>
        </AppLink>
    );
});
