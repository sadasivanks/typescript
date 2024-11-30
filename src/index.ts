import express, { Express,Request,Response } from "express";
const port=8000;
const app:Express = express();

app.get("/",(req:Request,res:Response)=>{
    res.send("hello welcome")
});

app.get("/hiii",(req:Request,res:Response)=>{
    res.send("hello welcome")
});

app.listen(port, () =>{
    console.log(`now ur port ${port}`)
})