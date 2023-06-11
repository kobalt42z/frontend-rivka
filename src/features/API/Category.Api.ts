import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL_REST_API } from "../../constant";
import { RootState } from "../Store/store";
import { CategoryResponse, Slist, categoryFromDb } from "../../interfaces";
import { url } from "inspector";
import { MainAPI } from "./Main.Api";

export const CategoryApi = MainAPI.injectEndpoints({
   
    endpoints: (builder) => ({
        getCategories: builder.query<CategoryResponse, void>({
            query: () => ({
                url: 'categories',
                method: 'GET',

            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.categories.map(({ id }) => ({ type: 'Category' as const, id })),
                        { type: 'Category' as const, id: 'LIST' }
                    ]
                    : [{ type: 'Category', id: 'LIST' }],

        }),
        createCategory: builder.mutation({

            query: (_body: FormData) => ({
                url: 'categories',
                method: 'POST',
                body: _body

            }),
            invalidatesTags: [{ type: 'Category', id: 'LIST' }]
        }),
        editCategory: builder.mutation({

            
            query: ({ _body, id }: { _body: FormData, id: string }) => ({
                url: `categories/${id}`,
                method: 'PATCH',
                body: _body
            }),

            invalidatesTags: [{ type: 'Category', id: 'LIST' }]
        }),
        deleteCategory: builder.mutation({

            query: (id: string) => ({
                url: `categories/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Category', id: 'LIST' }]
        }),
        getCategoriesSlist: builder.query<Slist[],undefined>({
            query:()=>({
                url:'categories/slist',
                method:'GET',
            })
        })
    })

})

export const { useCreateCategoryMutation } = CategoryApi
export const { useGetCategoriesQuery } = CategoryApi
export const { useDeleteCategoryMutation } = CategoryApi
export const { useEditCategoryMutation} = CategoryApi
export const { useGetCategoriesSlistQuery} = CategoryApi
