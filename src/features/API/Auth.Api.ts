import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import LoginCredentials ,{ RegisterInpute }from "../../interfaces/auth.interface";

export const authApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333' }),
    endpoints: (builder) => ({
      
        login: builder.mutation({
            query: (cred: LoginCredentials) => ({
                url: "auth/login",
                method: "POST",
                body: cred
            })
            
        }),
        signUp:builder.mutation({
            query:(registerCred : RegisterInpute)=>({
                url:'auth/register',
                method:'POST',
                body:registerCred
            })
        })
    })

})
 export const {useLoginMutation,useSignUpMutation} = authApiSlice