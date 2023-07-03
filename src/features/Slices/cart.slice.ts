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
            const index = state.products.findIndex((item) => item.specId === spec.id)
            if (index === -1) {
                const toPush: ProductInCart = {
                    name: data.name,
                    brand: data.brand,
                    imgUrl: data.imgUrl,
                    product_id: data.id,
                    specId: spec.id,
                    count: spec.count
                }
                state.products.push(toPush)
            } else {
                state.products[index].count++;
            }
            state.count++;
        },
        increment(state, { payload }: PayloadAction<string>) {
            const target = state.products.findIndex(item => item.specId === payload)
            if (target === -1) return
            state.products[target].count++;
            state.count++;
        },
        decrement(state, { payload }: PayloadAction<string>) {
            const target = state.products.findIndex(item => item.specId === payload)
            if (target === -1) return
            if (state.products[target].count > 0) state.products[target].count++;
            state.count--;
        },
        removeFromCart(state, { payload }: PayloadAction<string>) {
            const target = state.products.findIndex(item => item.specId === payload);
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