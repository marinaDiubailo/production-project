import type { Meta, StoryObj } from '@storybook/react';
import { NotificationButton } from './NotificationButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({}),
        (Story) => (
            <div
                style={{
                    background: 'var(--inverted-bg-color)',
                    padding: '10px',
                }}
            >
                <Story />
            </div>
        ),
    ],
} as Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Light: Story = {
    args: {},
};
