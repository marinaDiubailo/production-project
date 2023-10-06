import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CommentList } from './CommentList';

const meta = {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Light: Story = {
    args: {
        comments: [
            {
                id: '1',
                user: {
                    id: '1',
                    username: 'admin',
                    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
                },
                text: 'Hello, world!',
            },
            {
                id: '2',
                user: {
                    id: '1',
                    username: 'Alla',
                    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
                },
                text: 'Hello, world!',
            },
            {
                id: '3',
                user: {
                    id: '1',
                    username: 'Peter',
                    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
                },
                text: 'Hello, world!',
            },
        ],
    },
};

export const Dark: Story = {
    args: {
        comments: [
            {
                id: '1',
                user: {
                    id: '1',
                    username: 'admin',
                    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
                },
                text: 'Hello, world!',
            },
            {
                id: '2',
                user: {
                    id: '1',
                    username: 'Alla',
                    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
                },
                text: 'Hello, world!',
            },
            {
                id: '3',
                user: {
                    id: '1',
                    username: 'Peter',
                    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
                },
                text: 'Hello, world!',
            },
        ],
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
    args: {
        comments: [
            {
                id: '1',
                user: {
                    id: '1',
                    username: 'admin',
                    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
                },
                text: 'Hello, world!',
            },
            {
                id: '2',
                user: {
                    id: '1',
                    username: 'Alla',
                    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
                },
                text: 'Hello, world!',
            },
            {
                id: '3',
                user: {
                    id: '1',
                    username: 'Peter',
                    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
                },
                text: 'Hello, world!',
            },
        ],
    },
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const IsLoading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
};
