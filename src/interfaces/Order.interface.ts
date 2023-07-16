import { DBEntity } from "./global.interfaces"
import { SpecificationFromDB, productFromDB } from "./product.interface"
import { DB_user } from "./user.interface"

export interface Order extends DBEntity {
    userId: string,
    cartId: string,
    status: Status,
    cartProducts:CartProduct[],
    user: DB_user
}

enum Status {
    WAITING_FOR_PAYMENT
}
export interface CartProduct extends DBEntity{
    specificationId:string
    orderId:string
    specification:specicationLinked 
    //add product somewhere!!
    count:number
}
export interface specicationLinked extends SpecificationFromDB{
    product:productFromDB
}