import express ,{ Request, Response } from 'express'
import mongoose from "mongoose"
import boilerplate from "../models"

const Router = express.Router()

Router.post("/todo",async (req:Request,res:Response)=>{
if(req.body.id === "" || req.body.todo ===""){
    res.status(300).send("Invalid request")
}
else{
        try{
        const newTodo = new boilerplate({
            _id: new mongoose.Types.ObjectId(),
            id: req.body.id,
            todo:req.body.todo
        })
        await newTodo.save()
        res.status(200).send("New todo added")
    }
    catch(err){
        res.status(400).send("An error occured")
    }
}
})

export default Router