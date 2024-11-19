import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Tabs } from './Tabs';

const meta = {
  title: 'ui/redesigned/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
    onTabClick: { action: 'onTabClick' },
  },
  args: {
    tabs: [
      {
        value: 'tab1',
        content: 'tab1',
      },
      {
        value: 'tab2',
        content: 'tab2',
      },
      {
        value: 'tab3',
        content: 'tab3',
      },
    ],
    value: 'tab2',
  },
} as Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
