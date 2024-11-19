/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const style = {
  color: 'purple',
  border: '2px solid purple',
  padding: 15,
  borderRadius: '10px',
};

const meta = {
  title: 'ui/redesigned/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: (
      <>
        <div style={style}>first</div>
        <div style={style}>second</div>
        <div style={style}>third</div>
        <div style={style}>fourth</div>
        <div style={style}>fifth</div>
      </>
    ),
  },
} as Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
  args: {},
};

export const Row8: Story = {
  args: {
    gap: '8',
  },
};

export const Row16: Story = {
  args: {
    gap: '16',
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
  },
};

export const Column16: Story = {
  args: {
    gap: '16',
    direction: 'column',
  },
};
