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

}
export enum role {
    ADMIN,
    USER,
    EMPLOYEE,
}