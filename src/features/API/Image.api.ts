import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const imgApi = createApi({
    reducerPath: 'images',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.cloudinary.com/v1_1/dc2dt22q6/image',

    }),
    endpoints: (builder) => ({
        uploadImg: builder.mutation({
            query: (_body: FormData) => ({
                url: '/upload',
                method: 'POST',
                body: _body,
            })
        })
    })
})

export const { useUploadImgMutation } = imgApi