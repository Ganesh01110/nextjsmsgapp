import { z } from "zod";

export const usernameValidation = z
       .string()
       .min(2,"Username must be 2 character")
       .max(20,"Username must be maximum 20 character")
       .regex(/^[a-zA-z0-9_]+$/ , "username must not contain special character")


export const signupSchema = z.object({
    usesrname:usernameValidation ,
    email:z.string().email({message:'invalid email address'}),
    password: z.string().min(6, {message:"password must be at least 6 characters"}),
})