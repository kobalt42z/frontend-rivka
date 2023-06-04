import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../API/Products.Api";
import TokenPayloadReducer from '../Slices/Payload.slice'
import userSlice from "../Slices/user.slice";
import { CategoryApi } from "../API/Category.Api";
import shopSlice from "../Slices/shop.slice";
import cartSlice from "../Slices/cart.slice";
import { MainAPI } from "../API/Main.Api";
import productFromSlice from "../Slices/productFrom.slice";




export const store = configureStore({
    reducer: {
        [MainAPI.reducerPath]: MainAPI.reducer,
        tokenReducer: TokenPayloadReducer,
        user: userSlice,
        shop: shopSlice,
        cart: cartSlice,
        productFrom: productFromSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // Ignore these paths in the 
            serializableCheck: {
                ignoredPaths: ['productFrom.image',"productFrom.reqBody"],
            }
        })
            .concat(MainAPI.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;