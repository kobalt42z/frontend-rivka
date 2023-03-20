import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../interfaces'

interface ProductsState {
    products: Product[];
    totalFetched: number;
    maxProducts: number;
    currentPage: number;
    totalPages: number;
   
}
interface addItemAction {
    products: Product[];
    amountFetched: number;
}

interface initProductsAction {
    products: Product[];
    maxProducts: number;
}



const perPage = 10

const initialState: ProductsState = {
    products: [],
    totalFetched: 0,
    maxProducts: 0,
    currentPage: 0,
    totalPages: 0,
    
};

const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        initProducts(state, action: PayloadAction<initProductsAction>) {
            state.products = action.payload.products
            state.totalFetched = action.payload.products.length
            state.maxProducts = action.payload.maxProducts
            state.totalPages =
                action.payload.maxProducts % perPage ?
                    (action.payload.maxProducts / perPage) + 1 :
                    action.payload.maxProducts / perPage;
            state.currentPage++;


        },
        addProducts(state, action: PayloadAction<addItemAction>) {
            state.products = state.products.concat(action.payload.products)
            state.totalFetched += action.payload.products.length
            state.currentPage++;
        }
    }
})

export const {addProducts,initProducts}=productSlice.actions
export default productSlice.reducer


