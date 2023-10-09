import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                },
            },
        }),
    ],
    args: {
        articleId: '1',
    },
    parameters: {
        msw: {
            handlers: [
                rest.get(
                    `${__API__}/article-ratings?userId=1&articleId=1`,
                    (_req, res, ctx) => {
                        return res(ctx.status(200), ctx.json([{ rate: 4 }]));
                    }
                ),
            ],
        },
    },
} as Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof ArticleRating>;

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

const withoutRate = {
    msw: {
        handlers: [
            rest.get(
                `${__API__}/article-ratings?userId=1&articleId=1`,
                (_req, res, ctx) => {
                    return res(ctx.status(200), ctx.json([]));
                }
            ),
        ],
    },
};

export const LightWithoutRate: Story = {
    args: {},
    parameters: withoutRate,
};

export const DarkWithoutRate: Story = {
    args: {},
    parameters: withoutRate,
};
DarkWithoutRate.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeWithoutRate: Story = {
    args: {},
    parameters: withoutRate,
};
OrangeWithoutRate.decorators = [ThemeDecorator(Theme.ORANGE)];
