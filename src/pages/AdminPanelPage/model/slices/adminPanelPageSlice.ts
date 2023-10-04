import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdminPanelPageSchema } from '../types/adminPanelPage';

const initialState: AdminPanelPageSchema = {};

export const adminPanelPageSlice = createSlice({
    name: 'adminPanelPage',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {},
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

export const { actions: adminPanelPageActions } = adminPanelPageSlice;
export const { reducer: adminPanelPageReducer } = adminPanelPageSlice;
