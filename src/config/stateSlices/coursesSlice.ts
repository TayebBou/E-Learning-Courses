import { createSlice } from "@reduxjs/toolkit";
import data from '../../containers/Courses/data.json';

const initialCoursesState:{} = {
    searchText: '',
    selectedModule: 'all',
    dataFiltred: data.courses
}

const coursesSlice = createSlice({
    name: 'courses',
    initialState: initialCoursesState,
    reducers: {
        searchText(state:any, action) {
            state.searchText = action.payload;
        },
        selectedModule(state:any, action) {
            state.selectedModule = action.payload;
        },
        dataFiltred(state:any,action) {
            state.dataFiltred = action.payload
        }
    }
});

export const coursesActions = coursesSlice.actions;
export default coursesSlice.reducer;