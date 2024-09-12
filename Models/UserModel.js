import mongoose, { model } from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const usershema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
        maxLength:20,
        minLength:5,

    },
    email:{
        type:String,
        required:[true,"email is required"],
        trim:true,
        maxLength:50,
        minLength:5,
        index:true,
        lowercase:true

    },
    password:String,
    role:{
type:String,
default:'user'
    },
    image:String,
    resetCode:{
        data:String,
        expiresAt:{
            type:Date,
            default:() => new Date(Date.now()+10*60*1000),

        }
    }

},{timestamps:true})

usershema.plugin(mongooseUniqueValidator);

export default mongoose.models.UserModel || mongoose.model('UserModel',usershema);