import { userTokenPayload } from "./user.interface";

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
    apartment: string; 
    city: string;
    postalCode: string;

    acceptEmail: boolean;
    acceptTerms?: boolean;
}

export interface subsetUser {
    email: string;
    firstName: string;
    lastName: string;
    id: string;
    role: string;
}

// try to use it in langage selection at register form 
export enum languages {
    he = 'he',
    fr = 'fr',
    en = 'en',
}

export interface authMeRes {
    valid: boolean;
    payload: userTokenPayload
}
export type LoginInputs = {
    example: string,
    exampleRequired: string,
    email: string,
    password: string
}