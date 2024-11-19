import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticlePageGreeting } from './ArticlePageGreeting';

const meta = {
  title: 'features/ArticlePageGreeting',
  component: ArticlePageGreeting,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlePageGreeting>;

export default meta;
type Story = StoryObj<typeof ArticlePageGreeting>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
