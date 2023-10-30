import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import EyeIcon from '@/shared/assets/icons/redesigned/eye.svg';
import { ArticleTextBlock } from '../../../model/types/article';
import {
    ArticleViewType,
    ArticleBlockType,
} from '../../../model/consts/consts';
import { ArticleListItemProps } from '../ArticleListItem';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './ArticleListItemRedesigned.module.scss';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation('article');

    const userInfo = (
        <>
            <Avatar size={32} src={article.user.avatar} />
            <Text bold text={article.user.username} />
        </>
    );

    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} className={cls.views} />
        </HStack>
    );

    if (view === ArticleViewType.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <Card
                padding="24"
                max
                data-testid="ArticleListItem"
                className={classNames(cls['article-list-item'], {}, [
                    className,
                    cls[view],
                ])}
            >
                <VStack gap="16" max>
                    <HStack gap="8" max>
                        <Avatar size={32} src={article.user.avatar} />
                        <Text bold text={article.user.username} />
                        <Text text={article.createdAt} />
                    </HStack>

                    <Text title={article.title} bold />
                    <Text title={article.subtitle} size="s" bold />
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        alt={article.title}
                        className={cls.image}
                    />
                    {textBlock?.paragraphs && (
                        <Text
                            className={cls['text-block']}
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                        />
                    )}
                    <HStack max justify="between">
                        <AppLink
                            to={getRouteArticleDetails(article.id)}
                            target={target}
                        >
                            <Button variant="outline">{t('Read more')}</Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls['article-list-item'], {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card} border="round-12">
                <AppImage
                    fallback={<Skeleton width={200} height={200} />}
                    src={article.img}
                    alt={article.title}
                    className={cls.image}
                />
                <VStack className={cls.info} gap="4">
                    <Text text={article.title} className={cls.title} />
                    <VStack className="footer" gap="4" max>
                        <HStack justify="between" max>
                            <Text
                                text={article.createdAt}
                                className={cls.date}
                            />

                            {views}
                        </HStack>
                        <HStack gap="4">{userInfo}</HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
});
