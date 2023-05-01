import { createSlice, current } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/src";




const initialState = {
    currentPage: 0,
    maxPage: 0
}


export const shopSlice = createSlice({
    name: 'shopSlice',
    initialState,
    reducers: {
        setMaxPage: (state, action: PayloadAction<number>) => {
            state.maxPage = action.payload
        },
        incrementCurrentPage: (state) => {
            if(state.maxPage>state.currentPage)
            state.currentPage++;
        }
    }
})


export const { incrementCurrentPage,setMaxPage } = shopSlice.actions
export default shopSlice.reducer