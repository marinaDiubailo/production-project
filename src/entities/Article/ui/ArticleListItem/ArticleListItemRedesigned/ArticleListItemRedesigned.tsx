import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { getRouteArticleDetails } from '@/shared/const/router';

import EyeIcon from '@/shared/assets/icons/redesigned/eye.svg';
import { ArticleTextBlock } from '../../../model/types/article';
import {
  ArticleViewType,
  ArticleBlockType,
} from '../../../model/consts/consts';
import { ArticleListItemProps } from '../ArticleListItem';
import cls from './ArticleListItemRedesigned.module.scss';
import {
  Avatar,
  Icon,
  Card,
  AppImage,
  Skeleton,
  AppLink,
  Button,
  Text,
  HStack,
  VStack,
} from '@/shared/ui';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation('article');

  const userInfo = (
    <>
      <Avatar size={32} src={article.user.avatar} className={cls.avatar} />
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
      <li>
        <Card
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
              <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                <Button variant="filled">{t('Read more')}</Button>
              </AppLink>
              {views}
            </HStack>
          </VStack>
        </Card>
      </li>
    );
  }

  return (
    <li>
      <AppLink
        data-testid="ArticleListItem"
        target={target}
        to={getRouteArticleDetails(article.id)}
        className={classNames(cls['article-list-item'], {}, [
          className,
          cls[view],
        ])}
      >
        <Card className={cls.card} border="round-s">
          <AppImage
            fallback={<Skeleton width={200} height={200} />}
            src={article.img}
            alt={article.title}
            className={cls.image}
          />
          <VStack className={cls.info} gap="4">
            <Text text={article.title} className={cls.title} />
            <VStack className={cls.footer} gap="4" max>
              <HStack justify="between" max>
                <Text text={article.createdAt} className={cls.date} />
                {views}
              </HStack>
              <HStack gap="4">{userInfo}</HStack>
            </VStack>
          </VStack>
        </Card>
      </AppLink>
    </li>
  );
});
