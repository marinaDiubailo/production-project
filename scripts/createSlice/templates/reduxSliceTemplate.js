const firstCharUpperCase = require('../firstCharUpperCase');
const firstCharLowerCase = require('../firstCharLowerCase');

module.exports = (sliceName) => {
    const typeName = `${firstCharUpperCase(sliceName)}Schema`;
    const lowerSliceName = `${firstCharLowerCase(sliceName)}`;

    return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${typeName} } from '../types/${lowerSliceName}';

const initialState: ${typeName} = {
    
};

export const ${lowerSliceName}Slice = createSlice({
    name: '${lowerSliceName}',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: ${lowerSliceName}Actions } = ${lowerSliceName}Slice;
export const { reducer: ${lowerSliceName}Reducer } = ${lowerSliceName}Slice;`;
};
