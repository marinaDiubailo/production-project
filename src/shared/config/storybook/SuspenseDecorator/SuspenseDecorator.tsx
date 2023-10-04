import { Decorator } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator: Decorator = (Story) => (
    // eslint-disable-next-line i18next/no-literal-string
    <Suspense fallback='Loading...'>
        <Story />
    </Suspense>
);
