import { Order } from "../../interfaces/Order.interface"
import { MainAPi } from "./Main.Api"


const extendedApi = MainAPi.injectEndpoints({
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

export const { useGetOrdersQuery } = extendedApi