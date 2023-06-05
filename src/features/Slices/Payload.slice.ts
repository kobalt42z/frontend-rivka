import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface initState {
    tokenPayload:   null
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

export const {  setToken, clearToken ,sign} = TokenPayLoadSlice.actions

export default TokenPayLoadSlice.reducer;