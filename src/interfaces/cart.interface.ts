import { SpecificationDto } from "./product.interface"

export interface Cart {
    products: []
}
export interface ProductInCart {
    product_id: string,
    imgUrl: string
    name: string
    description: string
    spec: SpecificationDto
    count: number
}