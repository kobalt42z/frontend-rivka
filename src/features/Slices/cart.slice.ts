import { createSlice } from "@reduxjs/toolkit";
import { Cart, ProductInCart, SpecificationDto, SpecificationFromDB, productFromDB } from "../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit/src";
import { specFilter } from "./specFilter.slice";


const initialState: Cart = {
    products: [],
    count: 0
}


/*
* spec id  exist in array ? : 
    ?true : get index counter ++ at index
    !false : push new 
 */

const CartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        addToCart(state, { payload: { data, spec } }: PayloadAction<{ data: productFromDB, spec: specFilter }>) {
            if (!spec.id) return state
            const index = state.products.findIndex((item) => item.spec.id === spec.id)
            if (index === -1) {
                const toPush: ProductInCart = {
                    basicProduct: data,
                    spec,
                    count: spec.count
                }
                state.products.push(toPush)
                state.count += spec.count
            } else {
                state.products[index].count++;
                state.count++;
            }
        },
        increment(state, { payload }: PayloadAction<string>) {
            const target = state.products.findIndex(item => item.spec.id === payload)
            if (target === -1) return
            state.products[target].count++;
            state.count++;
            return state
        },
        decrement(state, { payload }: PayloadAction<string>) {
            const target = state.products.findIndex(item => item.spec.id === payload)
            if (target === -1) return
            if (state.products[target].count > 1) state.products[target].count--;
            else { state.products.splice(target, 1) }
            state.count--;
            return state
        },

        removeFromCart(state, { payload }: PayloadAction<string>) {
            const target = state.products.findIndex(item => item.spec.id === payload);
            if (target === -1) return;
            else {
                state.count -= state.products[target].count
                state.products.splice(target, 1);// remove from products[target ]from cart 
            }
        }
    }
})

export const { addToCart, decrement, increment, removeFromCart, } = CartSlice.actions
export default CartSlice.reducer