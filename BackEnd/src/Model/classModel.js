import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true
        },
        description:{
            type:String,
            required:true
        },
        instructor:{
            type:String,
            required:true
        },
        schedule:{
            type:Date,
            required:true
        },
        meetingUrl:{type:String,
            required:true
        },
        isFree:{
            type:Boolean,
            default:true
        },
        registeredStudents:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"

            }
        ]
    },{timestamps:true}
)