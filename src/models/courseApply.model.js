import mongoose from "mongoose";



const applySchema= new mongoose.Schema({
    name:{
        type:String
    },
    fatherName:{
        type:String
    },
    phoneNo:{
        type:Number
    },
    email:{
        type:String
    },
    education:{
        type:String
    },
    address:{
        type:String
    },
    referredBy:{
        type:String
    },
    applyFor:{
        type:String
    }
})





export default mongoose.models.courseApply || mongoose.model("courseApply", applySchema)