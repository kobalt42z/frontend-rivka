import { userTokenPayload } from "./user.interface";

export default interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterInpute {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    phone: string;
    password: string;
    Cpassword?: string
    selectedLanguage: string;
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