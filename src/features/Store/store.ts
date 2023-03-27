import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "../API/Auth.Api";
import TokenPayloadReducer from '../Slices/Payload.slice'
import userSlice from "../Slices/user.slice";


export const store = configureStore({
    reducer: {
        [authApiSlice.reducerPath]:authApiSlice.reducer,
        tokenReducer:TokenPayloadReducer,
        user:userSlice
        
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch ;