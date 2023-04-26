import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL_REST_API } from "../../constant";
import { ProductDto, ProductResponse, productFromDB, productResponse } from "../../interfaces";
import { RootState } from "../Store/store";
import { types } from "util";


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
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        findALlProduct: builder.query<ProductResponse, number>({
            query: (page) => ({

                url: `products/?page=${page}`,
                method: 'GET',

            }),
            providesTags: (result) =>
                result
                    ? [


                        ...result.products.map(({ id }) => ({ type: 'Product' as const, id })),
                        { type: 'Product', id: "LIST" }
                    ]
                    : [{ type: 'Product', id: "LIST" }]





        }),
        createProduct: builder.mutation({
            query: (_body: FormData) => ({
                url: 'products',
                method: 'POST',
                body: _body,
            }),
            invalidatesTags: [{ type: "Product", id: "LIST" }],
        }),
        updateProduct: builder.mutation({
            query: (arg: { _body?: FormData, id: string }) => ({
                url: `products/${arg.id}`,
                method: 'PATCH',
                body: arg._body,
            }),
            invalidatesTags: [{ type: "Product", id: "LIST"}]
        }),
        deleteProduct: builder.mutation({
            query: (id:string) =>({
                url: `products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: "Product", id: "LIST"}]
        })
    })

})

export const { useLazyFindALlProductQuery, useFindALlProductQuery } = productApi
export const { useCreateProductMutation } = productApi
export const { useUpdateProductMutation } = productApi
export const { useDeleteProductMutation } = productApi