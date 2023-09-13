/* eslint-disable i18next/no-literal-string */
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import {
    getArticleData,
    getArticleError,
    getArticleIsLoading,
} from '../../model/selectors/getArticle';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleReducer } from '../../model/slice/articleSlice';
import cls from './Article.module.scss';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    article: articleReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleData);
    // const isLoading = useSelector(getArticleIsLoading);
    const isLoading = true;
    const error = useSelector(getArticleError);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border={'50%'}
                />
                <Skeleton
                    className={cls.title}
                    width={300}
                    height={32}
                />
                <Skeleton
                    className={cls.skeleton}
                    width={600}
                    height={24}
                />
                <Skeleton
                    className={cls.skeleton}
                    width={'100%'}
                    height={200}
                />
                <Skeleton
                    className={cls.skeleton}
                    width={'100%'}
                    height={200}
                />
            </div>
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
        content = <div>Article details hehe</div>;
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.article, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
