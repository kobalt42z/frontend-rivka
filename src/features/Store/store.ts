import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productApi } from "../API/Products.Api";
import TokenPayloadReducer from '../Slices/Payload.slice'
import userSlice from "../Slices/user.slice";
import { CategoryApi } from "../API/Category.Api";
import shopSlice from "../Slices/shop.slice";

import { MainAPI } from "../API/Main.Api";
import productFromSlice from "../Slices/productFrom.slice";
import { persistReducer, persistStore } from "redux-persist"
import storage from 'redux-persist/lib/storage';
import cartSlice from "../Slices/cart.slice";
import specFilterSlice from "../Slices/specFilter.slice";



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartt']
}
const rootReducer = combineReducers({
    [MainAPI.reducerPath]: MainAPI.reducer,
    tokenReducer: TokenPayloadReducer,
    user: userSlice,
    shop: shopSlice,
    productFrom: productFromSlice,
    cart: cartSlice,
    specFilter: specFilterSlice,
    

})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // Ignore these paths in the 
            serializableCheck: {
                ignoredActions: ["productFormSlice/setImage"],//!must specify both !!
                ignoredActionPaths: ["productFormSlice.setImage"],
                ignoredPaths: ['productFrom.image', "productFrom.reqBody", "productFrom.setImage"],

            }
        })
            .concat(MainAPI.middleware)
});
export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;