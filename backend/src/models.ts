import mongoose  from "mongoose"

const boilerplate = new mongoose.Schema({
    _id:{
   type: mongoose.Types.ObjectId
    },
    id: {
        type:String,
        required:true
    },
    todo:{
        type:String,
        required:true
    }
})

export default mongoose.model("todo", boilerplate)