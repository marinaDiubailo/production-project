/* eslint-disable i18next/no-literal-string */
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Text,
    TextAlign,
    TextSize,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Icon } from '@/shared/ui/deprecated/Icon';
import {
    getArticleData,
    getArticleError,
    getArticleIsLoading,
} from '../../model/selectors/getArticleSelectors';
import { AtricleBlock } from '../../model/types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleReducer } from '../../model/slices/articleSlice';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    article: articleReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleData);
    const isLoading = useSelector(getArticleIsLoading);
    const error = useSelector(getArticleError);

    const renderBlock = useCallback((block: AtricleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent key={block.id} block={block} />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent key={block.id} block={block} />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent key={block.id} block={block} />
                );
            default:
                return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border={'50%'}
                />
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width={'100%'} height={200} />
                <Skeleton width={'100%'} height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                title={t('An error occured')}
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = (
            <>
                <HStack justify="center" max>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </HStack>
                <VStack gap="4" max data-testid="ArticleDetails.Info">
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap="8">
                        <Icon Svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <Icon Svg={CalendarIcon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="16"
                max
                className={classNames(cls.article, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
