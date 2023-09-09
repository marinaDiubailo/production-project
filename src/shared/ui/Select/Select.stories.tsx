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
    },
};

export const Dark: Story = {
    args: {
        label: 'Country',
        options: [
            { value: '123', content: 'Беларусь' },
            { value: '1234', content: 'Россия' },
            { value: '1235', content: 'Украина' },
        ],
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
