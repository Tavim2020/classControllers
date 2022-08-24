import { createSlice } from '@reduxjs/toolkit'

const store = createSlice({ 
  name: 'store',
  initialState: {
    modal: false,
  },
  reducers: {
    openModal: (state) => {
      state.modal = !state.modal
    }
  }
 })


export const { openModal } = store.actions
export default store.reducer