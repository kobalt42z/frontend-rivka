import { createSlice } from "@reduxjs/toolkit";
import { productFromDB } from "../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit/src";
import { CART_NAME } from "../../constant";

export interface cartSLiceInitState {
    products: productFromDB[]
    totalInCart: number
}

const initialState: cartSLiceInitState = {
    products: [],
    totalInCart: 0
}


const addToCartAction = (data: productFromDB[], product: productFromDB) => {
    if (data.length === 0) {
        data.push({ ...product, count: 1 })
        updateLocalStorage(data)

    }
    else {
        data.forEach(p => {
            if (product.id === p.id && p.count) {
                p.count++

            }
            else {
                data.push({ ...product, count: 1 })
            }
        })

        updateLocalStorage(data)
    }


    return data;
};
const updateLocalStorage = (cartData: productFromDB[]) => {
    localStorage.setItem(CART_NAME, JSON.stringify(cartData))
}
export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<productFromDB>) => {

            state.products = addToCartAction(state.products, action.payload);
            state.totalInCart++;

        },
        subItem: (state, action: PayloadAction<string>) => { 
           state.products.map((p,i)=>{
            if(p.id === action.payload && p.count){
                p.count--;
            }
            if(p.id === action.payload&& p.count === 0){
                const t = state.products.splice(i,1);
            }
            updateLocalStorage(state.products)
           })
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

    },

})

export const {subItem, addToCart, clearCart, removeFromCart, loadCart } = cartSlice.actions
export default cartSlice.reducer