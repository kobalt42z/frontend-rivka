import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/src";
import { minFBUser } from "../../interfaces";


interface userState {
    user: minFBUser | null
}
const initialState: userState = {
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<minFBUser>) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = null
        }
    }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer;