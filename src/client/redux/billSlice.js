import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allBills: [{title: 'loading'}],
}

export const billSlice = createSlice({
  name: 'bill',
  initialState,
  reducers: {
    loadingBills: (state, action) => {
      //console.log('state in reducer',state, 'payload in reducer',action)
      return { ...state, allBills: action.payload}
    },
    deleteBill: (state, action) => {
      state.allBills = state.allBills.filter(x => x._id != action.payload);
    },
  },
})


export const { deleteBill, loadingBills } = billSlice.actions

export default billSlice.reducer