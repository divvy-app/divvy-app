import { configureStore } from '@reduxjs/toolkit'
import billReducer from './billSlice'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    bill: billReducer,
    user: userReducer
  },
})