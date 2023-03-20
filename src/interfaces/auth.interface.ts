export default interface LoginCredentials {
    email: string;
    password: string;
}

export interface subsetUser{
    email: string;
    firstName: string;
    lastName: string;
    id:string;
    role: string;
}