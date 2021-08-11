import "./scss/add.css"
import cancel from "./icons/cancel.svg"

function Add() {
    return (
       <div className="modal">
           <div className="inp">
               <div className="canc">
                   <img src={cancel} alt="close modal" />
               </div>
               <form >
                   <input type="text" placeholder="Add a new task" />
                   <button type="submit">Add</button>
               </form>
           </div>
       </div>
    )
}

export default Add
