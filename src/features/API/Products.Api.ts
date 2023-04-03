import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL_REST_API } from "../../constant";
import { productResponse } from "../../interfaces";
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
        findALl: builder.query({
            query: (page: number) => ({
                url: `products/?page=${page}`,
                method: 'GET',

            }),


        })
    })
})

export const { useLazyFindALlQuery, useFindALlQuery } = productApi