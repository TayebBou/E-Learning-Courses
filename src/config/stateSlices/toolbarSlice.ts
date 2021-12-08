import { createSlice } from "@reduxjs/toolkit";

const initialToolbarState:{} = {
    isMedium: false,
    visibleLeft: false
}

const toolbarSlice = createSlice({
    name: 'toolbar',
    initialState: initialToolbarState,
    reducers: {
        isMedium(state:any, action) {
            state.isMedium = action.payload;
        },
        visibleLeft(state:any, action) {
            state.visibleLeft = action.payload;
        },
    }
})

export const toolbarActions = toolbarSlice.actions;
export default toolbarSlice.reducer;