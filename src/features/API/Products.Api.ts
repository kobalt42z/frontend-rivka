import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { productResponse } from "../../interfaces";
import { RootState } from "../Store/store";

export const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3333",
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).tokenReducer.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: (builder) => ({
        findALl: builder.query({
            query: (page: number) => ({
                url: `products/?page=${page}`,
                method: 'GET',

            }),


        })
    })
})

export const { useLazyFindALlQuery, useFindALlQuery } = productApi