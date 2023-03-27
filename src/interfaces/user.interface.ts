export interface user {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    phone: string;
    role: role;
    acceptEmail: boolean;
}
export enum role {
    ADMIN = 'ADMIN',
    USER = 'USER',
    EMPLOYEE = 'EMPLOYEE',
}
export interface userTokenPayload {
    firstName: string;
    lastName: string;
    sub: string,
    role: role,
    iat: number,
    exp: number
}
