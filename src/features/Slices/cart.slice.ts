import { createSlice } from "@reduxjs/toolkit";
import { Cart, ProductInCart, SpecificationDto, SpecificationFromDB, productFromDB } from "../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit/src";


const initialState: Cart = {
    products: [],
    count: 0
}
interface addToCartAction {
    baseProduct: productFromDB,
    spec: SpecificationFromDB
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
        addProduct(state, { payload }: PayloadAction<addToCartAction>) {


            const { baseProduct: { name, imgUrl, id, brand }, spec } = payload // ?  multiple destruction from payload 
            const index = state.products.findIndex((item) => item.spec.id === spec.id)
            if (index === -1) {
                const toPush: ProductInCart = {
                    name,
                    brand,
                    imgUrl,
                    product_id: id,
                    spec: spec,
                    count: 0
                }
                state.products.push(toPush)
            } else {
                state.products[index].count++;
            }
            state.count++;
        },
        increment(state, { payload }: PayloadAction<string>) {
            const target = state.products.findIndex(item => item.spec.id === payload)
            if (target === -1) return
            state.products[target].count++;
            state.count++;
        },
        decrement(state, { payload }: PayloadAction<string>) {
            const target = state.products.findIndex(item => item.spec.id === payload)
            if (target === -1) return
            if (state.products[target].count > 0) state.products[target].count++;
            state.count--;
        },
        removeProduct(state, { payload }: PayloadAction<string>) {
            const target = state.products.findIndex(item => item.spec.id === payload);
            if (target === -1) return;
            else {
                state.count -= state.products[target].count
                state.products.splice(target, 1);// remove from products[target ]from cart 
            }
        }
    }
})

export const { addProduct, decrement, increment, removeProduct, } = CartSlice.actions
export default CartSlice.reducer