import { categoryFromDb } from "./category.interface";
import { DBEntity } from "./global.interfaces";

//  * Req section : 
export interface ProductDto extends BasicProduct {
  translations: TranslationDto
  Specifications: SpecificationDto[]
}


export interface BasicProduct {
  name: string;
  brand: string;
  description: string;
  base_price: number;
  selling_price: number;
  reduction_p: number;
  supply?: number;
  active: boolean;
  categoryIds: string[]
}

export interface SpecificationDto {
  color: string
  size: string
  curve: string
  thickness: string
  supply: number
}


export interface LangueDto {
  language?: languages
  name?: string;
  description?: string;
}

export type TranslationDto = {
  [key in languages]?: LangueDto

}



export interface productResponse {
  products: productFromDB[];
  count: number;
}

export interface ProductTranslation {
  language: string;
  name: string;
  description: string;
}
// export interface EditValues {
//   [key: string]: keyof Product;

// }


//  ? from the db 
export interface productFromDB extends Omit<ProductDto, 'translations' | 'Specifications'>, DBEntity {
  translations: transletionFromDb[]
  categorys: { name: string }[]
  count: number
  imgUrl: string
  Specification: SpecificationDto[]
}

export interface transletionFromDb {
  id: string,
  language: string,
  name: string,
  description: string,
  productId: string
}

export type ProductResponse = {
  products: productFromDB[],
}
export enum languages {
  fr = "fr",
  en = "en",
} 
