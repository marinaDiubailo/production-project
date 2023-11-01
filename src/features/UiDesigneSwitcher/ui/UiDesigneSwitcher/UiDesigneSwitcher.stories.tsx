import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { UiDesigneSwitcher } from './UiDesigneSwitcher';

const meta = {
    title: 'features/UiDesigneSwitcher',
    component: UiDesigneSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof UiDesigneSwitcher>;

export default meta;
type Story = StoryObj<typeof UiDesigneSwitcher>;

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
