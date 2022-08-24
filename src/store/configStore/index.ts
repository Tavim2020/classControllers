import { configureStore } from '@reduxjs/toolkit'
import storeReducer from '../reducers'


const store = configureStore({
  reducer: {
    store: storeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store