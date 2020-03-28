import { IUser } from "./user.interface";

export class User implements IUser {
     constructor(
         public Login:string ,
         public Password:string,
         public Email:string
     ) {}
}