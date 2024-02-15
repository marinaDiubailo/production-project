import { Decorator } from '@storybook/react';
// eslint-disable-next-line eslint-correct-paths-plugin/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator: Decorator = (Story) => <div>{Story()}</div>;
