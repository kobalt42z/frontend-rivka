import { createSlice } from "@reduxjs/toolkit";
import { productFromDB } from "../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit/src";
import { CART_NAME } from "../../constant";

interface initStateInteface {
    products: productFromDB[]
}

const initialState: initStateInteface = {
    products: []
}



const updateLocalStorage = (cartData: productFromDB[]) => {
    localStorage.setItem(CART_NAME, JSON.stringify(cartData))
}
export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<productFromDB>) => {
            state.products.push(action.payload)
            updateLocalStorage(state.products)
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(product => product.id !== action.payload)
            updateLocalStorage(state.products)
        },
        clearCart: (state) => {
            state = initialState
            localStorage.removeItem(CART_NAME)
        },
        loadCart: (state, action: PayloadAction<productFromDB[]>) => {
            state.products = action.payload
            // console.log('loaded',{products},{payload});
        }

    }
})

export const { addToCart, clearCart, removeFromCart,loadCart } = cartSlice.actions
export default cartSlice.reducer