import express ,{ Request, Response } from 'express'
import boilerplate from "../models"

const Router = express.Router()

Router.post("/edit",async (req:Request,res:Response)=>{
if(req.body.iden === ""){
    res.status(300).send("Invalid request")
}
else{
        try{
          await boilerplate.deleteOne({id:req.body.iden}).then(id=>{
             res.status(200)
       }).catch(err=>{
           res.status(302).send(err)
       })
     
    }
    catch(err){
        res.status(400).send("An error occured")
    }
}
})

export default Router
