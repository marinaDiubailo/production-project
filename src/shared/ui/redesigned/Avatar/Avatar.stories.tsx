import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '../../../assets/tests/storybook.jpg';

const meta = {
  title: 'ui/redesigned/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};

export const Small: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
};
