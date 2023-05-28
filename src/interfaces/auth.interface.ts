

export default interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterInpute {
    fullName: string;
    dateOfBirth: Date;
    email?: string;
    phone: string;
    selectedLanguage: string;

    street: string
    stNum: number;
    entrance?: string; // optional
    apartment: number; 
    city: string;
    postalCode: string;

    acceptEmail: boolean;
    acceptTerms?: boolean;
}


// try to use it in langage selection at register form 
export enum languages {
    he = 'he',
    fr = 'fr',
    en = 'en',
}


export type LoginInputs = {
    example: string,
    exampleRequired: string,
    email: string,
    password: string
}