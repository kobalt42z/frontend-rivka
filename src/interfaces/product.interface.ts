export interface Product {
    name: string;
    description : string;
    brand: string;
    price_ils :number ;
    reduction_p :number ; 
    supply:number;
    category:string;
    translated:{
      fr?:ProductTranslation
      en?:ProductTranslation
    }
}

interface ProductTranslation {
    name : string ;
    description : string;
}