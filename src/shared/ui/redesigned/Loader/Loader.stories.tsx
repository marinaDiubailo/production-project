import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Loader } from './Loader';

const meta = {
  title: 'ui/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
