const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');
const firstCharLowerCase = require('../firstCharLowerCase');

module.exports = async (layer, sliceName) => {
    const schemaName = `${sliceName}Schema`;

    const content =
        layer === 'pages'
            ? `export { ${sliceName}Async as ${sliceName} } from './ui/${sliceName}/${sliceName}.async';
export { ${schemaName} } from './model/types/${firstCharLowerCase(sliceName)}';
    `
            : `export { ${sliceName} } from './ui/${sliceName}/${sliceName}';
export type { ${schemaName} } from './model/types/${firstCharLowerCase(
                  sliceName
              )}';
    `;

    try {
        await fs.writeFile(
            resolveRoot('src', layer, sliceName, 'index.ts'),
            content
        );
    } catch (e) {
        console.log('Не удалось создать PUBLIC API');
    }
};
