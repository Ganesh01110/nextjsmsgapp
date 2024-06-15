import mongoose, {Schema, Document} from "mongoose";

export interface Message extends Document{
    content: string ;  //in type script string but in mongoose String
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default:Date.now
    }
})

export interface User extends Document{
  username:string;
  email:string;
  password:string;
  verifyCode:string;
  verifyCodeExpire:Date;
  isVerified:boolean;
  isAcceptingMessage:boolean;
  messages:Message[]
}

const UserSchema: Schema<User> = new Schema({
    username:{
        type: String,
        required: [true,"Username is required"],
        trim:true,
        unique:true
    },
    email:{
        type: String,
        required: [true,"email is required"],
        unique:true,
        match:[/.+\@.+..+/,'please give valid email']
    },
    password:{
        type: String,
        required: [true,"password is required"],
    },
    verifyCode:{
        type: String,
        required: [true,"verify code is required"],
    },
    verifyCodeExpire:{
        type: Date,
        required: [true,"verify code expire is required"],
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true,
    },
    messages:[MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema) 

export default UserModel;