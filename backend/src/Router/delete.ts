import express ,{ Request, Response } from 'express'
import mongoose from "mongoose"
import boilerplate from "../models"

const Router = express.Router()

Router.post("/del",async (req:Request,res:Response)=>{
if(req.body.id === ""){
    res.status(300).send("Invalid request")
}
else{
        try{
       boilerplate.deleteOne({id:req.body.id}, (err)=>{
          if(err){
        res.status(400).send("An error occured")
              
          }
          else{
              res.status(200).send("User deleted successfully")
          }
       })
    }
    catch(err){
        res.status(400).send("An error occured")
    }
}
})

export default Router
