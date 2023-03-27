import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/src";
import { user } from "../../interfaces";

interface userState {
    user:user |null,
}
const initialState:userState = {
    user:null
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action:PayloadAction<user>) => {
            state.user = action.payload
        },
        clear:(state)=>{
            state.user = null
        }
    }
})

export const {setUser,clear} = userSlice.actions
export default userSlice.reducer ;