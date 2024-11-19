import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Input } from './Input';

const meta = {
  title: 'ui/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {
  args: {
    placeholder: 'Type text',
    value: '123456',
  },
};

export const Dark: Story = {
  args: {
    placeholder: 'Type text',
    value: '123456',
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
