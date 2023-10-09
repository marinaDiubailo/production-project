import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ArticleRating from './ArticleRating';

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
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
