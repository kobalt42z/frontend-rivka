import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL_REST_API } from "../../constant";
import { ProductDto, ProductResponse, TranslationDto, categoryFromDb, languages, productFromDB, productResponse, shopResponse } from "../../interfaces";
import { RootState } from "../Store/store";
import { types } from "util";
import { MainAPI } from "./Main.Api";
import { url } from "inspector";



export const productApi = MainAPI.injectEndpoints({
    endpoints: (builder) => ({
        findALlProduct: builder.query<ProductResponse, number | undefined>({
            query: (page) => ({

                url: `products/?page=${page ?? ''}`,
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
        findeByCategory: builder.query<productFromDB, string>({
            query: (categoryName) => ({
                url: `product/byCategory/${categoryName}`,
                method: 'GET',
            }),
        }),

        findProductById: builder.query<productFromDB, string>({
            query: (id) => ({

                url: `products/${id}`,
                method: 'GET',
            }),
            // providesTags: (result) =>
            //  [{ type: 'Product', id: "LIST" }]
        }),


        // * CRUD :

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
            invalidatesTags: [{ type: "Product", id: "LIST" }]
        }),

        deleteProduct: builder.mutation({
            query: (id: string) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: "Product", id: "LIST" }]
        })
        ,
        getShop: builder.query<shopResponse, number>({
            query: (categoryPage) => ({
                url: `products/byCategory?&category=${categoryPage}`,
                method: 'GET',




            }),
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
            },
            merge: (currentCache, newItems) => {
                // console.log(currentCache, newItems)//! debug only 
                currentCache.categoryAndItems.push(...newItems.categoryAndItems)
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },
            // providesTags: (result) =>
            //     result
            //         ? [


            //             ...result.products.map(({ id }) => ({ type: 'Product' as const, id })),
            //             { type: 'Product', id: "LIST" }
            //         ]
            //         : [{ type: 'Product', id: "LIST" }]
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,





        }),

        getMaxPageShop: builder.query({
            query: () => ({
                url: `products/shopCount/`,
                method: 'GET',
            }),
        }),
    }),


})

export const { useLazyFindALlProductQuery, useFindALlProductQuery } = productApi
export const { useCreateProductMutation } = productApi
export const { useUpdateProductMutation } = productApi
export const { useDeleteProductMutation } = productApi
export const { useGetShopQuery } = productApi
export const { useGetMaxPageShopQuery } = productApi
export const { useFindProductByIdQuery } = productApi
export const { useFindeByCategoryQuery } =productApi