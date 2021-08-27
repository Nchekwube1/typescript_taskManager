import cancel from "./icons/cancel.svg"
import Single from "./Single"
import axios  from "axios"
import {globalState, gstate} from "./global"
import { useContext,useEffect } from "react"
import { todo } from "./global"
import "./scss/body.css"
import Add from "./Add"
function Body() {
    const {isModal, setIsModal,template,setTemplate} = useContext(globalState) as gstate
     useEffect(()=>{
         axios.get<todo[]>("http://localhost:4500/todo").then(data=>{
             setTemplate(data.data)
         })
    
    },[])
    return (
        <div className="body">
            {isModal ? <Add/> : null}
            <div className="plus">
              <div className="img">
           <img src={cancel} alt="add todo" onClick={()=>{
               setIsModal(true) 
               }}  />
              </div>
            </div>
            <div className="main">

                {template.map((each:todo)=>{
                    return (
                    <Single id={each.id} todo={each.todo} _id={each._id}key={each.id}  />
                    )
                })}
                                     
                
            </div>
        </div>
    )
}

export default Body
