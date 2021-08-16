import cancel from "./icons/cancel.svg"
import Single from "./Single"
import {globalState, gstate} from "./global"
import { useContext } from "react"
import { todo } from "./global"
import "./scss/body.css"
import Add from "./Add"
function Body() {
    const {isModal, setIsModal,template} = useContext(globalState) as gstate
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
                    <Single id={each.id} todo={each.todo} key={each.id}  />
                    )
                })}
                                     
                
            </div>
        </div>
    )
}

export default Body
