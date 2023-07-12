import { createSlice } from "@reduxjs/toolkit/src";
import { BasicProduct, LangueDto, ProductDto, TranslationDto, SpecificationDto } from "../../interfaces";
import { Action, PayloadAction } from "@reduxjs/toolkit";
import { languages, productFromDB } from "../../interfaces/product.interface";
import { multiStepFormOut, useMultiStepForm } from "../../Hooks/UseMultiStepForm";


interface data {
    basicProduct: BasicProduct | null, // ? can be  a product id to add 
    translations: LangueDto[],
    translationsIndex: number
    Specifications: SpecificationDto[]
    SpecificationIndex: number
    basicProductId?: string
    goNext: boolean,
    imageUrl?: string,
    body?: ProductDto

}

const initialState: data = {
    basicProduct: null,
    translations: [],
    translationsIndex: 0,
    Specifications: [],
    SpecificationIndex: 0,
    goNext: false,
}




const productForm = createSlice({
    name: "productFormSlice",
    initialState,

    reducers: {
        setEditProduct: (state, { payload: { Specification, categorys, translations, imgUrl, ...rest } }: PayloadAction<productFromDB>) => {
            state.basicProduct = rest;
            state.Specifications = Specification
            state.translations = translations
        },
        addBasicProductId: (state, action: PayloadAction<string>) => {
            state.basicProductId = action.payload;
            state.basicProduct = null;
        },
        addBasicProduct: (state, action: PayloadAction<BasicProduct>) => {
            console.log(action.payload);

            state.basicProduct = action.payload

        },

        // addBasicProduct(product)
        addTranslation: (state, action: PayloadAction<LangueDto>) => {
            const exist = state.translations.findIndex(t => t.language === action.payload.language)
            if (exist === -1) {
                state.translations.push(action.payload)
                state.translationsIndex += 1;
            }
            else state.translations[exist] = action.payload
        },
        deleteTranslation: (state, action: PayloadAction<LangueDto>) => {
            const exist = state.translations.findIndex(t => t.language === action.payload.language)
            if (exist !== -1) {
                state.translations.splice(exist, 1);
                state.translationsIndex -= 1;
            }
        },
        addSpecification: (state, action: PayloadAction<SpecificationDto>) => {
            const exist = state.Specifications?.findIndex(t => JSON.stringify(t) === JSON.stringify(action.payload))
            if (exist === -1) {
                state.Specifications?.push(action.payload)
                state.SpecificationIndex += 1;
            }
            else state.Specifications[exist] = action.payload
        },
        deleteSpecification: (state, action: PayloadAction<SpecificationDto>) => {
            const exist = state.Specifications?.findIndex(t => JSON.stringify(t) === JSON.stringify(action.payload))
            if (exist !== -1) {
                state.Specifications.splice(exist, 1)
                state.SpecificationIndex -= 1
            }
        },
        setGoNext: (state, action: PayloadAction<boolean>) => {
            state.goNext = action.payload
        },
        setProductImage(state, { payload }: PayloadAction<string>) {
            state.imageUrl = payload
            return state
        },

        init: (state) => {
            state = initialState
        },
        prepareToLaunch: (state) => {
            if (!state.basicProduct) return console.warn("No basic product!")
            state.body = {
                ...state.basicProduct,
                translations: state.translations,
                Specifications: state.Specifications,
            }

        }
    }
})

export const {
    addBasicProduct,
    addSpecification,
    addTranslation,
    deleteSpecification,
    deleteTranslation,
    setEditProduct,
    addBasicProductId,
    init,
    setGoNext,
    prepareToLaunch,
    setProductImage,
} = productForm.actions

export default productForm.reducer