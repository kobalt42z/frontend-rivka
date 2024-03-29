import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL_REST_API } from "../../constant";
import { ByCategoryResponse, CommentInput, ProductDto, ProductResponse, TranslationDto, categoryFromDb, languages, productFromDB, productResponse, shopResponse } from "../../interfaces";
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

            // attach tags to the data so it will be refreshed when data mutate
            providesTags: (result) =>
                result
                    ? [


                        ...result.products.map(({ id }) => ({ type: 'Product' as const, id })),
                        { type: 'Product', id: "LIST" }
                    ]
                    : [{ type: 'Product', id: "LIST" }]





        }),
        findeByCategory: builder.query<ByCategoryResponse, string>({
            query: (categoryName) => ({
                url: `products/byCategory/${categoryName}`,
                method: 'GET',
            }),
        }),

        findProductById: builder.query<productFromDB, { id: string, comment?: number }>({
            query: ({ id, comment }) => ({

                url: `products/${id}?comment=${comment ?? 0}`,
                method: 'GET',
            }),
            providesTags: (res) => [{ type: 'Product', id: res?.id ?? "noneId" }]
        }),


        // * mutations :

        createProduct: builder.mutation({
            query: (arg: { stringifyedBody: string, image: File | Blob }) => {
                const fromBody = new FormData();
                fromBody.append("json_body", arg.stringifyedBody)
                fromBody.append("image", arg.image)
                return {
                    url: 'products',
                    method: 'POST',
                    body: fromBody,
                }
            },
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

        addComment: builder.mutation({
            query: ({ productId, body }: addCommentArgs) => ({
                url: `comments/${productId}/`,
                method: 'POST',
                body,
            }),
            invalidatesTags: (res, err, oargs) => [{ type: 'Product', id: oargs.productId }]
        }),
    }),


})

interface addCommentArgs {
    productId: string,
    body: CommentInput
}
export const { useLazyFindALlProductQuery, useFindALlProductQuery } = productApi
export const { useCreateProductMutation } = productApi
export const { useUpdateProductMutation } = productApi
export const { useDeleteProductMutation } = productApi
export const { useGetShopQuery } = productApi
export const { useGetMaxPageShopQuery } = productApi
export const { useFindProductByIdQuery, useLazyFindProductByIdQuery } = productApi
export const { useFindeByCategoryQuery } = productApi
export const { useAddCommentMutation } = productApi