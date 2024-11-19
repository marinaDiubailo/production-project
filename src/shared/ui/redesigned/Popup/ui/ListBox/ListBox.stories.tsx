import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ListBox } from './ListBox';

const meta = {
  title: 'ui/redesigned/Popup/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
    onChange: { action: 'onChange' },
  },
  args: {
    items: [
      { value: 'Беларусь', content: 'Беларусь' },
      { value: 'Россия', content: 'Россия' },
      { value: 'Украина', content: 'Украина' },
    ],
    value: 'Беларусь',
    direction: 'bottom right',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '200px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const BottomLeft: Story = {
  args: {
    direction: 'bottom left',
  },
};

export const TopLeft: Story = {
  args: {
    direction: 'top left',
  },
};

export const TopRight: Story = {
  args: {
    direction: 'top right',
  },
};
