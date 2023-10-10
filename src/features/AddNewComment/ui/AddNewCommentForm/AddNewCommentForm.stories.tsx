import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import AddNewCommentForm from './AddNewCommentForm';

const meta = {
    title: 'features/AddNewCommentForm',
    component: AddNewCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
        onSendComment: { action: 'onSendComment' },
    },
} as Meta<typeof AddNewCommentForm>;

export default meta;
type Story = StoryObj<typeof AddNewCommentForm>;

export const Light: Story = {
    args: {},
};
Light.decorators = [StoreDecorator({})];

export const Orange: Story = {
    args: {},
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({})];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
