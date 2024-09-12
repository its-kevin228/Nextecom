import { NextResponse } from "next/server";
import dbconect from "@/utils/MBD";

export async function POST(req){

    await dbconect()

    const body=await req.json()
    const {name,email,password}=body

    try{
const user= await new User({
name,
email,
password:await bcrypt.hash(password,10),
}).save();

console.log('user created =>',user);
return NextResponse.json(user);
    }catch(e){
        console.log(e)
return NextResponse.json({e:e.message},{status:500})
    }

 
}