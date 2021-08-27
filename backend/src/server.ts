import mongoose  from "mongoose"
import  express from "express"
import Add from "./Router/add"
import get from "./Router/get"
import del from "./Router/delete"
import edit from "./Router/edit"
const cors =  require("cors")
const app =express()

mongoose.connect("mongodb://localhost:27017/tsTodo", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
let db = mongoose.connection

db.once("open",()=> console.log("db open for connection"))
db.on("error", ()=> console.log("an error occured"))
app.use(express.json())
app.use(cors())
app.use('/',Add)
app.use('/',get)
app.use('/',del)
app.use('/',edit)


app.listen(4500,()=> console.log("Listening on port 4500") )

// export {}