import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs"
import {sendVerificationEmail} from "@/helpers/sendVerificationEmail"

export async function POST(request:Request){
    await dbConnect()

    try{
      const {username,email,password} = await request.json()

    //   case-1 if username exist finding by username
      const existingUserVeryfiedByUserName = await UserModel.findOne({
        username,
        isVerified:true
      })

      if(existingUserVeryfiedByUserName ){
        return Response.json({
            success:false,
            message:"username is already taken",
        },{status:400})
      }

    //   case-2 finding username by email
      const existingUserByemail = await UserModel.findOne({ 
        email
      })

      const verifyCode = Math.floor(100000 + Math.random() * 900000).toString

      if(existingUserByemail) {
          true // TODO:
      }else{
          const hashedPassword = await bcrypt.hash(password,10)
          const expiryDate = new Date()
          expiryDate.setHours(expiryDate.getHours() + 1)

         const newUser =  new UserModel({
            username,
            email,
            password: hashedPassword ,
            verifyCode,
            verifyCodeExpire:expiryDate,
            isVerified:false,
            isAcceptingMessage:true,
            messages: []
          })

          await newUser.save()
      }

      // send verification email

    }catch(error){
       console.error('error registering user',error)
       return Response.json(
        {
            success:false,
            message:"Error registering user"
        },
        {
            status:500
        }
       )
    }
}