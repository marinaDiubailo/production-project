module.exports = (sliceName) => {
    return `import { lazy } from 'react';

export const ${sliceName}Async = lazy(() => import('./${sliceName}'));`;
};
