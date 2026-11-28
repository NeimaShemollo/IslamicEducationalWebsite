import jwt from "jsonwebtoken"
import { success, z } from "zod"
export const verifyAccessToken = (req,res,next)=>{
const header=req.headers.authorization
  if(!header)
    return res.status(401).json({ success:false,message:"bearer token not found"})
   const token = header.slice(7)
   try {
     const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET_KEY)
     next()
   } catch (error) {
    return res.status(401).json({success:false,message:"invalid token"})
   }
}
