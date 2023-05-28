import { Order } from "../../interfaces/Order.interface"
import { MainAPI } from "./Main.Api"


const ordersApi = MainAPI.injectEndpoints({
    endpoints: (build) => ({
        getOrders: build.query<Order[],undefined>({
            query: () =>({
                url: '/orders/',
                method:'GET',
            }),

        }),
    }),
    overrideExisting: true,
})

export const { useGetOrdersQuery } = ordersApi