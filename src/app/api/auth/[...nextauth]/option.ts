import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: any, req): Promise<any> {
        await dbConnect()
        try{
           const user = await UserModel.findOne({
                $or:[
                    {email:credentials.identifier},
                    {username:credentials.identifier}
                ]
            })

            if(!user){
                throw new Error("no user found with this email ")
            }

            if(!user.isVerified){
                throw new Error("please verify with your email first before login ")
            }

            const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password)

            if (isPasswordCorrect){
                return user
            }else{
                throw new Error("iincorrect password ")

            }
        }catch(error:any){
                 throw new Error(error)
        }
      },
    }),
  ],
  
};
