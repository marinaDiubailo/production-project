import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import SettingsPage from './SettingsPage';

const meta = {
  title: 'pages/SettingsPage',
  component: SettingsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof SettingsPage>;

export default meta;
type Story = StoryObj<typeof SettingsPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
