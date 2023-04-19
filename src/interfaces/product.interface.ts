
//  * Req section : 
export interface ProductDto {
  name: string;
  brand: string;
  description: string;
  base_price: number;
  selling_price: number;
  reduction_p: number;
  supply: number;
  active: boolean;

  categoryIds: string[]
  colors: string[]
  sizes: string[]
  curves: string[]
  thickness: string[]
  translations?: TranslationDto
  // imgUrl?: string;

}
interface LangueDto {
  language?: string
  name?: string;
  description?: string;

}

interface TranslationDto {
  fr?: LangueDto
  en?: LangueDto
}



export interface productResponse {
  products: productFromDB[];
  count: number;
}

interface ProductTranslation {
  language: string;
  name: string;
  description: string;
}
// export interface EditValues {
//   [key: string]: keyof Product;

// }


//  ? from the db 
export interface productFromDB {
  id: string,
  createdAt: string,
  updatedAt: string,
  name: string,
  brand: string,
  description: string,
  base_price: number,
  selling_price: number,
  reduction_p: number,
  supply: number,
  imgUrl: string,
  colors: string[],
  sizes: string[],
  curves: string[],
  thickness: string[],
  orderId: string | null,
  categoryIds: string[],
  active: boolean,
  translations: transletionFromDb[]
  categorys: { name: string }[]
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
  count: number
}