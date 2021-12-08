import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './stateSlices/coursesSlice';
import jitsiReducer from './stateSlices/jitsiSlice';
import toolbarReducer from './stateSlices/toolbarSlice';

const store = configureStore({
    reducer: {
        courses: coursesReducer,
        jitsi: jitsiReducer,
        toolbar: toolbarReducer
    }
});

export default store;