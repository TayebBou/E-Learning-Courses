import { createSlice } from "@reduxjs/toolkit";

const initialJitsiState:{} = {
    loading: true,
    error: null
}

const jitsiSlice = createSlice({
    name: 'jitsi',
    initialState: initialJitsiState,
    reducers:{
        loading(state:any) {
            state.loading = false;
        },
        error(state:any,action) {
            state.error = action.payload;
        }
    }
});

export const jitsiActions = jitsiSlice.actions;
export default jitsiSlice.reducer;