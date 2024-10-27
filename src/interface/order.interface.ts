


import { CartInterface } from "./cart.interface";
import { UserInterface } from "./user.interface";

export interface OrderInterface {
    id?:string
    userId:string,
    isPaid:boolean,
    user?:UserInterface,
    orderDetails:CartInterface[],
    createdAt?:Date,
    total?:number,
    unitTotal?:number,
}
