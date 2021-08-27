import mongoose  from "mongoose"
interface Todo {
    _id:string;
    id:string;
    todo:string
}

const boilerplate = new mongoose.Schema<Todo>({
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

 const scheme:mongoose.Model<Todo> = mongoose.model("todo", boilerplate)

 export default scheme