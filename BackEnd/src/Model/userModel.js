import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
       fullName:{
        type:String,
        required:true,
        trim:true
       }, 
       emailAddress:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
       },
       phone:{
        type:String,
        required:true,
        unique:true,
        trim:true
       },
       password:{
        type:String,
        required:true
       },
       role:{
        enum:[
            "student",
            "admin",
            "instructor"
        ],
        default:"student"
       },
       passwordResetToken:{
        type:String,

       },
       passwordResetExpires:{
        type:Date
       },
       enrolledClasses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"class"
        }],
        bookGroups:[{type:mongoose.Schema.Types.ObjectId,
            ref:"bookGroup"
        }]

    },{
        timestamps:true
    }
) 
userSchema.index({emailAddress:1},{unique:true})
userSchema.index({phone:1},{unique:true})
const User = mongoose.model("User",userSchema)

export default User;