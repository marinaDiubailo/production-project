import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NavBar } from './NavBar';

const meta = {
  title: 'widget/NavBar',
  component: NavBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Light: Story = {
  args: {},
};
Light.decorators = [
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
];

export const NoAuthDark: Story = {
  args: {},
};
NoAuthDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
