import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import LoginCredentials from "../../interfaces/auth.interface";

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
            
        })
    })

})
 export const {useLoginMutation} = authApiSlice