import { createSlice } from "@reduxjs/toolkit";
import { Cart, ProductInCart, SpecificationDto, productFromDB } from "../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit/src";


const initialState: Cart = {
    products: []
}
interface addToCartAction {
    baseProduct: productFromDB,
    specId: SpecificationDto
}

const CartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        addProduct(state, { payload: { name, imgUrl, id } }: PayloadAction<productFromDB>) {
            const toPush: ProductInCart = {
                name,
                imgUrl,
                product_id: id,
                spec: [{}]
            }
            state.products.push()
        }
    }
})