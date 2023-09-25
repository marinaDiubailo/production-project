/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
    Article,
    ArticleSortField,
    ArticleType,
    ArticleViewType,
} from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Avatar from 'shared/assets/tests/storybook.jpg';
import ArticlesPage from './ArticlesPage';

const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '18.09.2023',
    user: {
        id: '1',
        username: 'admin',
        avatar: Avatar,
    },
    type: ['IT'],
    blocks: [],
} as Article;

const meta = {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            articlesPage: {
                isLoading: false,
                _inited: true,
                page: 1,
                limit: 1,
                hasMore: false,
                view: ArticleViewType.SMALL,
                order: 'asc',
                sort: ArticleSortField.VIEWS,
                search: '',
                type: ArticleType.IT,
                entities: {
                    1: article,
                },
                ids: [article.id],
            },
        }),
    ],
} as Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Light: Story = {
    args: {},
};

export const LightIsLoading: Story = {
    args: {},
};
LightIsLoading.decorators = [
    StoreDecorator({
        articlesPage: {
            isLoading: true,
            entities: {
                1: article,
            },
            ids: [article.id],
        },
    }),
];

export const LightBig: Story = {
    args: {},
};
LightBig.decorators = [
    StoreDecorator({
        articlesPage: {
            view: ArticleViewType.BIG,
            entities: {
                1: article,
            },
            ids: [article.id],
        },
    }),
];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
    args: {},
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
