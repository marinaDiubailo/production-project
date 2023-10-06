import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CommentCard } from './CommentCard';

const meta = {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Light: Story = {
    args: {
        comment: {
            id: '1',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
            },
            text: 'Hello, world!',
        },
    },
};

export const Dark: Story = {
    args: {
        comment: {
            id: '1',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
            },
            text: 'Hello, world!',
        },
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
    args: {
        comment: {
            id: '1',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
            },
            text: 'Hello, world!',
        },
    },
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const IsLoading: Story = {
    args: {
        comment: {
            id: '1',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
            },
            text: 'Hello, world!',
        },
        isLoading: true,
    },
};
