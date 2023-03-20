export default interface LoginCredentials {
    email: string;
    password: string;
}

export  interface RegisterInpute {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    phone: string;
}

export interface subsetUser{
    email: string;
    firstName: string;
    lastName: string;
    id:string;
    role: string;
}