import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL_REST_API } from "../../constant";
import { RootState } from "../Store/store";
import { CategoryResponse, categoryFromDb } from "../../interfaces";
import { url } from "inspector";

export const CategoryApi = createApi({
    reducerPath: 'category',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_REST_API,
        prepareHeaders: (headers, { getState }) => {

            const token = (getState() as RootState).tokenReducer.token
            if (!token) throw 'unauthenticated user '
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers

        }

    }),
    tagTypes: ['Category'],
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
        getCategoriesSlist: builder.query({
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
