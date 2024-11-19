import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleEditButton } from './ArticleEditButton';

const meta = {
  title: 'features/ArticleEditButton',
  component: ArticleEditButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleEditButton>;

export default meta;
type Story = StoryObj<typeof ArticleEditButton>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
