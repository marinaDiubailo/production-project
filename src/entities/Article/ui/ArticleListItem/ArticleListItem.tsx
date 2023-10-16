import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';
import EyeIcon from '@/shared/assets/icons/eye.svg';
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
                data-testid='ArticleListItem'
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
                    <AppImage
                        fallback={
                            <Skeleton
                                width='100%'
                                height={250}
                            />
                        }
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
                            to={getRouteArticleDetails(article.id)}
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
            data-testid='ArticleListItem'
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls['article-list-item'], {}, [
                className,
                cls[view],
            ])}
        >
            <Card>
                <div className={cls['image-wrapper']}>
                    <AppImage
                        fallback={
                            <Skeleton
                                width={200}
                                height={200}
                            />
                        }
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
