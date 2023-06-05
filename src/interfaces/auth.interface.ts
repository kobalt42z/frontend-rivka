

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

    address: {
        street: string
        stNum: number;
        entrance?: string; // optional
        apartment: number;
        city: string;
        postalCode: string;
    }

    acceptEmail: boolean;
    acceptTerms?: boolean;
}




export type LoginInputs = {
    example: string,
    exampleRequired: string,
    email: string,
    password: string
}