import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof ProfileCard>;

const data = {
  username: 'admin',
  age: 48,
  country: Country.Russia,
  currency: Currency.RUB,
  first: 'Ivan',
  last: 'Ivanov',
  city: 'Moscow',
  avatar: AvatarImg,
};

export const Light: Story = {
  args: {
    data,
  },
};

export const LightRedesigned: Story = {
  args: {
    data,
  },
};
LightRedesigned.decorators = [NewDesignDecorator];

export const DarkRedesigned: Story = {
  args: {
    data,
  },
};
DarkRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Dark: Story = {
  args: {
    data,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError: Story = {
  args: {
    error: 'An error occored',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
