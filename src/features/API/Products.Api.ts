import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL_REST_API } from "../../constant";
import { Product, productResponse } from "../../interfaces";
import { RootState } from "../Store/store";

export const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_REST_API,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).tokenReducer.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: (builder) => ({
        findALlProduct: builder.query({
            query: (page: number) => ({
                url: `products/?page=${page}`,
                method: 'GET',

            }),


        }),
        createProduct:builder.mutation({
            query:(_body:Product)=>({
                url:'products',
                method: 'POST',
                body:_body,
                
            })
            
        })
    })

})

export const { useLazyFindALlProductQuery, useFindALlProductQuery } = productApi
export const {useCreateProductMutation} = productApi