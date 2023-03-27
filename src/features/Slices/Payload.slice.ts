import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userTokenPayload } from "../../interfaces";

interface initState {
    tokenPayload: userTokenPayload | null
    token: string | null
    signed: boolean
}


const initialState: initState = {
    tokenPayload: null,
    token: null,
    signed:false
}

const TokenPayLoadSlice = createSlice({
    name: 'payload',
    initialState,
    reducers: {
        setPayload: (state, action:PayloadAction<userTokenPayload>) => {
            state.tokenPayload = action.payload
        },
        setToken: (state, action:PayloadAction<string>) => {
            state.token = action.payload
        },
        clearToken: (state) => {
            state.tokenPayload = null
            state.token = null
        },
        sign:(state)=>{
            state.signed = true ;
        }
    }
})

export const { setPayload, setToken, clearToken ,sign} = TokenPayLoadSlice.actions

export default TokenPayLoadSlice.reducer;