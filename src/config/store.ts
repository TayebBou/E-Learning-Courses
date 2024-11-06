import { configureStore } from '@reduxjs/toolkit'
import coursesReducer from './stateSlices/coursesSlice'
import toolbarReducer from './stateSlices/toolbarSlice'

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    toolbar: toolbarReducer,
  }
})

export default store