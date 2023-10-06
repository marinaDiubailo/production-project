import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'ui/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
    args: {
        width: 100,
        height: 100,
    },
};

export const Circle: Story = {
    args: {
        width: 100,
        height: 100,
        border: '50%',
    },
};

export const Dark: Story = {
    args: {
        width: 100,
        height: 100,
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkCircle: Story = {
    args: {
        width: 100,
        height: 100,
        border: '50%',
    },
};
DarkCircle.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
    args: {
        width: 100,
        height: 100,
    },
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const OrangeCircle: Story = {
    args: {
        width: 100,
        height: 100,
        border: '50%',
    },
};
OrangeCircle.decorators = [ThemeDecorator(Theme.ORANGE)];
