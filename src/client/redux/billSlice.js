import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const billSlice = createSlice({
  name: 'bill',
  initialState,
  reducers: {
    loadingBills: (state, action) => {
      state.value = {...action.payload};
    },
    deleteBill: (state, action) => {
      state.value = state.value.filter(x => x.title != action.payload);
    },
  },
})


export const { deleteBill, loadingBills } = billSlice.actions

export default billSlice.reducer