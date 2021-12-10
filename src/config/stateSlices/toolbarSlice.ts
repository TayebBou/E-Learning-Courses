import { createSlice } from '@reduxjs/toolkit'
import { IToolbarStates } from '../../shared/models/toolbarStates.model'

const initialToolbarState: IToolbarStates = {
  isMedium: window.innerWidth > 900 ? false : true,
  visibleLeft: false,
}

const toolbarSlice = createSlice({
  name: 'toolbar',
  initialState: initialToolbarState,
  reducers: {
    isMedium(state: IToolbarStates, action) {
      state.isMedium = action.payload
    },
    visibleLeft(state: IToolbarStates, action) {
      state.visibleLeft = action.payload
    },
  },
})

export const toolbarActions = toolbarSlice.actions
export default toolbarSlice.reducer
