/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Text } from '../Text/Text';
import { Card } from './Card';

const meta = {
  title: 'ui/redesigned/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Light: Story = {
  args: {
    children: <Text text="Hello, vorld!" title="HELLO" />,
  },
};

export const Dark: Story = {
  args: {
    children: <Text text="Hello, world!" title="HELLO" />,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightOutlined: Story = {
  args: {
    children: <Text text="Hello, vorld!" title="HELLO" />,
    variant: 'outlined',
  },
};

export const DarkOutlined: Story = {
  args: {
    children: <Text text="Hello, world!" title="HELLO" />,
    variant: 'outlined',
  },
};
DarkOutlined.decorators = [ThemeDecorator(Theme.DARK)];
