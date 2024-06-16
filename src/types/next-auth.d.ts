import 'next-auth'
// declare file to declare or modify

declare module 'next-auth' {
    interface User{
        _id?:string;
        isVerified?:boolean;
        isAcceptingMessages?:boolean;
        username?:string
    }
}