module.exports = (
    layer,
    componentName,
) => `import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ${componentName} } from './${componentName}';

const meta = {
    title: '${layer}/${componentName}',
    component: ${componentName},
    argTypes: {
        backgroundColor: { control: 'color' }
    },
} as Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Light: Story = {
    args: {}
};

export const Dark: Story = {
    args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
    args: {}
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
`;
