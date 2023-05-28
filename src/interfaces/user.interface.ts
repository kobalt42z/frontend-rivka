import { RegisterInpute } from "./auth.interface";
import { DBEntity } from "./global.interfaces";




export interface DB_user extends DBEntity,RegisterInpute {} ;
export enum role {
    ADMIN = 'ADMIN',
    USER = 'USER',
    EMPLOYEE = 'EMPLOYEE',
}

//!transfer this to RTK 
export interface minFBUser {
    uid: string ;
    displayName: string | null
    emailOrNumber: string | null
    role?: role;
    photoURL: string | null
}