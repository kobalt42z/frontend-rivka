import { createSlice } from "@reduxjs/toolkit";
import { SpecificationFromDB } from "../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit/src";
export interface specFilter {
    id: string | null
    curve: string | null
    thickness: string | null
    length: string | null
    color: string | null
    size: string | null
    count: number
}
const initialState: specFilter = {
    id: null, //spcification id 
    curve: null,
    length: null,
    thickness: null,
    color: null,
    size: null,
    count: 1,

}
const productFilterSlice = createSlice({
    name: "productFilter",
    initialState,
    reducers: {
        setCurve(state, { payload }: PayloadAction<string>) {
            state = { ...initialState }
            state.curve = payload
            return state
        },
        setThikness(state, { payload }: PayloadAction<string>) {
            state.length = null
            state.id = null
            state.thickness = payload
            return state
        },
        setLength(state, { payload }: PayloadAction<string>) {
            state.length = payload
            return state
        },
        setColor(state, { payload }: PayloadAction<string>) {
            state.color = payload
            return state
        },
        setSize(state, { payload }: PayloadAction<string>) {
            state.size = payload
            return state
        },
        setItem(state, { payload }: PayloadAction<string>) {
            state.id = payload
            return state
        },
        incrementFilter(state) {
            // TODO: give max value 
            state.count += 1
            return state
        },
        decrementFilter(state) {
            if (state.count > 1) state.count -= 1;
        }

    }
})

export const { setCurve, setItem, setThikness, setLength, setColor, setSize, decrementFilter, incrementFilter } = productFilterSlice.actions
export default productFilterSlice.reducer