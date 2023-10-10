/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { Article } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

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
        avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
    },
    type: ['IT', 'SCIENCE', 'POLITICS', 'ECONOMICS'],
    blocks: [],
} as Article;

const articleArray = new Array(3).fill(0).map((_, index) => ({
    ...article,
    id: String(index),
}));

const meta = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
    parameters: {
        msw: {
            handlers: [
                rest.get(`${__API__}/articles?_limit=3`, (_req, res, ctx) => {
                    return res(ctx.status(200), ctx.json(articleArray));
                }),
            ],
        },
    },
} as Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
    args: {},
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
