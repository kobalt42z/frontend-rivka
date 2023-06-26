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
        addProduct({ products, count ,...rest}, { payload }: PayloadAction<addToCartAction>) {
            rest // ! TEST 
            const { baseProduct: { name, imgUrl, id, brand }, spec } = payload
            const index = products.findIndex((item) => item.spec.id === spec.id)
            if (index === -1) {
                const toPush: ProductInCart = {
                    name,
                    brand,
                    imgUrl,
                    product_id: id,
                    spec: spec,
                    count: 0
                }
                products.push(toPush)
            } else {
                products[index].count++;
            }
            count++;
        },
        increment({ products, count }, { payload }: PayloadAction<string>) {
            const target = products.findIndex(item => item.spec.id === payload)
            if (target === -1) return
            products[target].count++;
            count++;
        },
        decrement({ products, count }, { payload }: PayloadAction<string>) {
            const target = products.findIndex(item => item.spec.id === payload)
            if (target === -1) return
            if (products[target].count > 0) products[target].count++;
            count--;
        },
        removeProduct({ products, count }, { payload }: PayloadAction<string>) {
            const target = products.findIndex(item => item.spec.id === payload);
            if (target === -1) return;
            else {
                count -= products[target].count
                products.splice(target, 1);// remove from products[target ]from cart 
            }
        }
    }
})

export const { addProduct, decrement, increment, removeProduct, } = CartSlice.actions
export default CartSlice.reducer