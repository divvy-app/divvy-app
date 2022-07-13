import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allBills: {},
}

export const billSlice = createSlice({
  name: 'bill',
  initialState,
  reducers: {
    loadingBills: (state, action) => {
      state.allBills = action.payload;
    },
    deleteBill: (state, action) => {
      state.allBills = state.allBills.filter(x => x._id != action.payload);
    },
  },
})


export const { deleteBill, loadingBills } = billSlice.actions

export default billSlice.reducer