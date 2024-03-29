// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL_REST_API } from '../../constant'
import { RootState } from '../Store/store'

// initialize an empty api service that we'll inject endpoints into later as needed
export const MainAPI = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_REST_API + '/',
        //? attach token to the request 
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).tokenReducer.token    
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    tagTypes: ['Product','Category'],
    endpoints: () => ({}),
})

export default MainAPI.reducer