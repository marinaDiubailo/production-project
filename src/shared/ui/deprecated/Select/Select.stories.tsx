import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Select } from './Select';

const meta = {
  title: 'ui/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    label: 'Country',
    options: [
      { value: '1', content: 'Беларусь' },
      { value: '2', content: 'Россия' },
      { value: '3', content: 'Украина' },
    ],
  },
} as Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
