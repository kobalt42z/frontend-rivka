import { createSlice } from "@reduxjs/toolkit";
import { SpecificationFromDB } from "../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit/src";
interface initialState {
    id: string | null
    curve: string | null
    thickness: string | null
    length: string | null
    supply: number
}
const initialState: initialState = {
    id: null,
    curve: null,
    length: null,
    thickness: null,
    supply: 0,
}
const productFilterSlice = createSlice({
    name: "productFilter",
    initialState,
    reducers: {
        setCurve(state, { payload }: PayloadAction<string>) {
            console.log(payload);

            state = {...initialState}
            state.curve = payload
            return state
        },
        setThikness(state, { payload }: PayloadAction<string>) {
            state.length = null
            state.thickness = payload
            return state
        },
        setLength(state, { payload }: PayloadAction<string>) {
            state.length = payload
            return state
        },
        setItem(state, { payload }: PayloadAction<{ id: string, count: number }>) {
            state.id = payload.id
            state.supply = payload.count
            return state
        }
    }
})

export const { setCurve, setItem, setThikness, setLength, } = productFilterSlice.actions
export default productFilterSlice.reducer