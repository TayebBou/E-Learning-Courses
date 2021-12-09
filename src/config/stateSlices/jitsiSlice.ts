import { createSlice } from '@reduxjs/toolkit'
import { IJitsiStates } from '../../shared/models/jitsiStates.model'

const initialJitsiState: IJitsiStates = {
  loading: true,
  error: '',
}

const jitsiSlice = createSlice({
  name: 'jitsi',
  initialState: initialJitsiState,
  reducers: {
    loading(state: IJitsiStates) {
      state.loading = false
    },
    error(state: IJitsiStates, action) {
      state.error = action.payload
    },
  },
})

export const jitsiActions = jitsiSlice.actions
export default jitsiSlice.reducer
