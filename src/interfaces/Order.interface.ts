import { productFromDB } from "./product.interface"
import { DB_user } from "./user.interface"

export interface Order {
    id: string,
    createdAt: string,
    updatedAt: string
    userId: string,
    cartId: string,
    totalItems: number,
    totalPrice: number,
    status: Status,
    cart:cart,
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