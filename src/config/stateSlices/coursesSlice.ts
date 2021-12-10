import { createSlice } from '@reduxjs/toolkit'
import data from '../../containers/Courses/data.json'
import { ICoursesStates } from '../../shared/models/coursesStates.model'
import { Module } from '../../shared/models/module.model'

const initialCoursesState: ICoursesStates = {
  searchText: '',
  selectedModule: Module.ALL,
  dataFiltred: data.courses,
}

const coursesSlice = createSlice({
  name: 'courses',
  initialState: initialCoursesState,
  reducers: {
    searchText(state: ICoursesStates, action) {
      state.searchText = action.payload
    },
    selectedModule(state: ICoursesStates, action) {
      state.selectedModule = action.payload
    },
    dataFiltred(state: ICoursesStates, action) {
      state.dataFiltred = action.payload
    },
  },
})

export const coursesActions = coursesSlice.actions
export default coursesSlice.reducer
