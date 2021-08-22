import express ,{ Request, Response } from 'express'
import mongoose from "mongoose"
import boilerplate from "../models"
const Router = express.Router()
interface todo {
    _id?:string,
  todo:string,
  id:string
}
Router.get("/todo",async (req:Request,res:Response)=>{
        try{
        const todos:todo[]= await boilerplate.find({})
        res.status(200).send(todos)
    }
    catch(err){
        res.status(400).send("An error occured")
    }

})

export default Router
