import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL_REST_API } from "../../constant";
import LoginCredentials, { authMeRes, RegisterInpute } from "../../interfaces/auth.interface";

export const authApiSlice = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_REST_API }),
    endpoints: (builder) => ({

        login: builder.mutation({
            query: (cred: LoginCredentials) => ({
                url: "auth/login",
                method: "POST",
                body: cred
            })

        }),
        signUp: builder.mutation({
            query: (registerCred: RegisterInpute) => ({
                url: 'auth/register',
                method: 'POST',
                body: registerCred
            })
        }),
        jwtAuth:builder.mutation({
            query:(token:string)=>({
                url: "auth/validateMe",
                method: "POST",
                headers:{
                    'Authorization': 'Bearer ' +  token
                }
            })
        })

    })

})
export const { useLoginMutation, useSignUpMutation ,useJwtAuthMutation } = authApiSlice