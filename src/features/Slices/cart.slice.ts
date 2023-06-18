import { createSlice } from "@reduxjs/toolkit";
import { Cart, productFromDB } from "../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit/src";
import { CART_COUNT_NAME, CART_NAME } from "../../constant";


const initialState: Cart = {
    products: []
}


const addToCartAction = (data: productFromDB[], product: productFromDB) => {
    if (data.length === 0) {
        console.log('length == 0');

        data.push({ ...product, count: 1 });
        return data;
    }
    for (let i = 0; i < data.length; i++) {

        if (data[i].id === product.id) {
            data[i].count++;

            break;
        }
        else if (i == data.length - 1) {

            data.push({ ...product, count: 1 });
            break;
        }

    }


    return data;
};
const updateLocalStorage = (cartData: productFromDB[], totalCount?: number) => {
    localStorage.setItem(CART_NAME, JSON.stringify(cartData))
    localStorage.setItem(CART_COUNT_NAME, JSON.stringify(totalCount))

}
export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<productFromDB>) => {

            state.products = addToCartAction(state.products, action.payload);
            state.totalInCart++;
            state.totalPrice += action.payload.selling_price
            updateLocalStorage(state.products, state.totalInCart);

        },
        subItem: (state, action: PayloadAction<string>) => {
            state.products.map((p, i) => {
                if (p.id === action.payload && p.count) {
                    p.count--;
                    state.totalInCart--;
                }
                if (p.id === action.payload && p.count === 0) {
                    state.products.splice(i, 1);
                    console.log('triggerd', state.totalInCart);

                }
            })
            console.log('ouside of map', state.totalInCart);
            updateLocalStorage(state.products, state.totalInCart);
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(product => {
                if (product.id !== action.payload)
                    return product
                else if (product.count) state.totalInCart -= product.count;
            })
            updateLocalStorage(state.products, state.totalInCart)
        },
        clearCart: (state) => {
            state = initialState
            localStorage.removeItem(CART_NAME)
        },
        loadCart: (state, action: PayloadAction<{ product: productFromDB[], count: number }>) => {
            state.products = action.payload.product
            state.totalInCart = action.payload.count
            // console.log('loaded',{products},{payload});
        }

    },

})

export const { subItem, addToCart, clearCart, removeFromCart, loadCart } = cartSlice.actions
export default cartSlice.reducer