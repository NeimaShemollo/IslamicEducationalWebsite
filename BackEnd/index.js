import express from "express"

const app=express()
app.use(express.json())
app.use(cookieParser())
app.listen(port,()=>{
    console.log("App is running")
})