import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Code } from './Code';

const meta = {
  title: 'ui/redesigned/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof Code>;

export const Light: Story = {
  args: {
    text:
      'const meta = {\n' +
      "\ttitle: 'ui/Code',\n" +
      '\tcomponent: Code,\n' +
      '\targTypes: {\n' +
      "\t\tbackgroundColor: { control: 'color' },\n" +
      '\t},\n' +
      '} as Meta<typeof Code>;',
  },
};

export const Dark: Story = {
  args: {
    text:
      'const meta = {\n' +
      "\ttitle: 'ui/Code',\n" +
      '\tcomponent: Code,\n' +
      '\targTypes: {\n' +
      "\t\tbackgroundColor: { control: 'color' },\n" +
      '\t},\n' +
      '} as Meta<typeof Code>;',
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
