import { dbConnect } from "@/database/dbConnection";
import courseApplyModel from "@/models/courseApply.model";
import { NextResponse } from "next/server";






export async function POST(request) {
    try {

        await dbConnect();

        let body = await request.json()

        let { name, fatherName, phoneNo, email, address, education, referredBy,applyFor } = body;
        if (name == "" || !name || phoneNo == "" || !phoneNo || address == "" || !address || !applyFor || applyFor=="") {
            return NextResponse.json({ success: false, reason: "All filds are required" })
        }

        let createdApply = await courseApplyModel.create({
            name,
            fatherName,
            phoneNo,
            email,
            address,
            education,
            referredBy,
            applyFor
        })

        return NextResponse.json({ success: true, msg: "The course apply is successfull", createdApply, applyFor })


    } catch (error) {
        return NextResponse.json({ success: false, reason: "error" })
    }
}