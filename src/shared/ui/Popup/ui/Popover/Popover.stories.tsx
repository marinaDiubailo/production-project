/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from '../../../Button/Button';
import { Popover } from './Popover';

const meta = {
    title: 'ui/Popup/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        trigger: <Button>Open</Button>,
        children: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>First item</span>
                <span>Second item</span>
                <span>Third item</span>
                <span>Fourth item</span>
            </div>
        ),
    },
} as Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof Popover>;

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
Orange.decorators = [ThemeDecorator(Theme.LIGHT)];
