//npm i mongoose mongoose-unique-validator
import { DB_URL } from "@/config";
import mongoose from "mongoose";

const dbconect = async() => {

if(mongoose.connection.readyState >= 1){
    return;
}

mongoose.connect(process,env,DB_URL);

}

export default dbconect;