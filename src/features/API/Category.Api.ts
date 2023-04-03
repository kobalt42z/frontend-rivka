import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL_REST_API } from "../../constant";
import { RootState } from "../Store/store";

export const CategoryApi = createApi({
    reducerPath: 'category',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_REST_API,
        prepareHeaders: (headers, { getState }) => {

            const token = (getState() as RootState).tokenReducer.token
            if(!token)throw 'unauthenticated user '
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers

        }

    }),
    endpoints:(builder)=>({
        
    })

})