import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSilce'
export const store = configureStore({
  reducer: {appReducer},
})
