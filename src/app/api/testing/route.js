import { NextResponse } from "next/server";




export async function GET(){
    return NextResponse.json({success:true, msg:"The testing api is working"})
}