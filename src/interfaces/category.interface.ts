import { productFromDB } from "./product.interface"

export interface categoryFromDb {
    id: string
    name: string
    createdAt:string
    updatedAt:string
    description:string
    products?:productFromDB[]
    productsIds:string[]
}

export type CategoryResponse = {
    categories: categoryFromDb[]
}
export interface categorysOptions {
    value: string, label: string
}