

type Role = "Admin" | "User";

export interface UserInterface {
    id?:string,
    name:string,
    email:string,
    role:Role,
}