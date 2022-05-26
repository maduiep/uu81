import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = loadingSlice.actions

export default loadingSlice.reducer