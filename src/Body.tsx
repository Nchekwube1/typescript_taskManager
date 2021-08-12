import cancel from "./icons/cancel.svg"
import Single from "./Single"
import {globalState} from "./global"
import { useContext } from "react"
import { todo } from "./Initial"
import "./scss/body.css"
import Add from "./Add"
function Body() {
    const {isModal, setIsModal,list,setList,template} = useContext(globalState)
    return (
        <div className="body">
            {isModal ? <Add/> : null}
            <div className="plus">
              <div className="img">
           <img src={cancel} alt="add todo" onClick={()=>{
               setIsModal(true) 
               setList(false)}}  />
              </div>
            </div>
            <div className="main">

                {template.map((each:todo)=>{
                    return (
                    <Single id={each.id} todo={each.todo} />
                    )
                })}
                                     
                
            </div>
        </div>
    )
}

export default Body
