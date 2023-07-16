import { DBEntity } from "./global.interfaces"
import { productFromDB } from "./product.interface"
import { DB_user } from "./user.interface"

export interface Order extends DBEntity {
    userId: string,
    cartId: string,
    status: Status,
    cart:cart[],
    user: DB_user
}
enum Status {
    WAITING_FOR_PAYMENT
}
export interface CartProducts {
    id: string,
    productId: string,
    count: number,
    cartId: string,
    product: productFromDB
}
export interface cart {
    id: string,
    createdAt: string,
    updatedAt: string,
    userId: string,
    cartProducts: CartProducts[]
}