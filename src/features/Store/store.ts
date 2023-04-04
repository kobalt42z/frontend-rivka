import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "../API/Auth.Api";
import { productApi } from "../API/Products.Api";
import TokenPayloadReducer from '../Slices/Payload.slice'
import userSlice from "../Slices/user.slice";
import { CategoryApi } from "../API/Category.Api";


export const store = configureStore({
    reducer: {
        [authApiSlice.reducerPath]: authApiSlice.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [CategoryApi.reducerPath]: CategoryApi.reducer,
        tokenReducer: TokenPayloadReducer,
        user: userSlice,


    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(authApiSlice.middleware)
        .concat(productApi.middleware)
        .concat(CategoryApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;