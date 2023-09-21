import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from '../types/ui';

const initialState: UISchema = {
    scroll: {},
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(.pending, (state) => {})
    //         .addCase(.fulfilled, (state,state, action: PayloadAction<>) => {})
    //         .addCase(.rejected, (state, action) => {});
    // },
});

export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;
