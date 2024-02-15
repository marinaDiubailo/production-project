import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CommentCard } from './CommentCard';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlags/FeatureFlags';

const meta = {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof CommentCard>;

const comment = {
    id: '1',
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
    text: 'Hello, world!',
};

export const Light: Story = {
    args: {
        comment,
    },
};

export const Dark: Story = {
    args: {
        comment,
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
    args: {
        comment,
    },
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const IsLoading: Story = {
    args: {
        comment,
        isLoading: true,
    },
};

export const LightRedesigned: Story = {
    args: {
        comment,
    },
};
LightRedesigned.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })];
