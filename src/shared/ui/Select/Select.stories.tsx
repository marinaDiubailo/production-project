import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from './Select';

const meta = {
    title: 'ui/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Light: Story = {
    args: {
        label: 'Country',
        options: [
            { value: '1', content: 'Беларусь' },
            { value: '2', content: 'Россия' },
            { value: '3', content: 'Украина' },
        ],
    },
};

export const Dark: Story = {
    args: {
        label: 'Country',
        options: [
            { value: '1', content: 'Беларусь' },
            { value: '2', content: 'Россия' },
            { value: '3', content: 'Украина' },
        ],
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
    args: {
        label: 'Country',
        options: [
            { value: '1', content: 'Беларусь' },
            { value: '2', content: 'Россия' },
            { value: '3', content: 'Украина' },
        ],
    },
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
