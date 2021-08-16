import "./scss/add.css"
import cancel from "./icons/cancel.svg"
import {globalState, gstate} from "./global"
import { useContext } from "react"
function Add() {
    function random():string{
     let a = [1,2,3,4,5,6,7,8,9,0,"a","s","d","f"]
     let ran = ""
     for(let i = 0;i<a.length;i++){
         ran += a[Math.floor(Math.random() * a.length) ]
     }

     return ran
    }
    const { setIsModal, todo,setTodo, template} = useContext(globalState) as gstate
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        let one = {todo, id : random()}
        template.push(one)
        setTodo("")
    }
    return (
       <div className="modal">
           <div className="inp">
               <div className="canc">
                   <img src={cancel} alt="close modal" onClick={()=>{setIsModal(false)}} />
               </div>
               <form onSubmit={handleSubmit} >
                   <input type="text" placeholder="Add a new task"  value={todo}  onChange={(e)=>{setTodo(e.target.value)}} />
                   <button type="submit">Add</button>
               </form>
           </div>
       </div>
    )
}

export default Add
