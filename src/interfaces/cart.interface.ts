import { SpecificationDto, SpecificationFromDB } from "./product.interface"

export interface Cart {
    products: ProductInCart[]
    count: number

    // specToPush:SpecificationDto
}
export interface ProductInCart {
    product_id: string,
    imgUrl: string
    name: string
    brand: string
    specId: string
    count: number
}

export interface ProductInCartDto {
    count: number
    specifications: string[] // array of specification id to connect with 
}