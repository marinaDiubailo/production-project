import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const notifications = [
    {
        id: '1',
        title: 'Уведомление',
        description: 'Поставь лайк и оставь комментарий',
    },
    {
        id: '2',
        title: 'Уведомление 2',
        description: 'Поставь лайк и оставь комментарий',
    },
    {
        id: '3',
        title: 'Уведомление 3',
        description: 'Поставь лайк и оставь комментарий',
    },
];

const meta = {
    title: 'entities/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
    parameters: {
        msw: {
            handlers: [
                rest.get(`${__API__}/notifications`, (_req, res, ctx) => {
                    return res(ctx.status(200), ctx.json(notifications));
                }),
            ],
        },
    },
} as Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof NotificationList>;

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
