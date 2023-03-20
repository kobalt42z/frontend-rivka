
export interface Product  {
    name: string;
    description : string;
    sizes: string[];
    colores: string[];
    brand: string;
    reduction_p? :number ; 
    selling_price :number ;
    base_price :number ;
    active:boolean ;
    supply:number;
    categorys:Array<string>;
    translated:{
      fr?:ProductTranslation
      en?:ProductTranslation
    }
}

interface ProductTranslation  {
    name : string ;
    description : string;
}
export interface EditValues {
  [key:string ]: keyof Product;
 
}

// cat 