import { createSlice } from "@reduxjs/toolkit";
import { productFromDB } from "../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit/src";
import { CART_NAME } from "../../constant";

interface initStateInteface {
    products: string[]
}

const initialState: initStateInteface = {
    products: []
}



const updateLocalStorage = (cartData: string[]) => {
    localStorage.setItem(CART_NAME, JSON.stringify(cartData))
}
export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<string>) => {
            state.products.push(action.payload)
            updateLocalStorage(state.products)
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(id => id !== action.payload)
            updateLocalStorage(state.products)
        },
        clearCart: (state) => {
            state = initialState
            localStorage.removeItem(CART_NAME)
        }
    }
})

export const {addToCart,clearCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer