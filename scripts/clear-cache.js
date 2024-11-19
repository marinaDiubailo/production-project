// const path = require('path');
// const fs = require('fs');

// const pathToCacheFolder = path.resolve(
//     __dirname,
//     '..',
//     'node_modules',
//     '.cache',
// );

// if (fs.existsSync(pathToCacheFolder)) {
//     fs.rm(pathToCacheFolder, { recursive: true }, (err) => {
//         if (err) throw err;
//         console.log('Папка с cache успешно удалена');
//     });
// // }

//     "prepare": "husky install",
//     "generate": "node ./scripts/createSlice/index.js",
//     "postinstall": "node ./scripts/clear-cache.js",
