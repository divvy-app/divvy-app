import { createSlice } from '@reduxjs/toolkit'

// Slice
const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: ""
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        }
    },
});


export const { setEmail } = userSlice.actions

export default userSlice.reducer