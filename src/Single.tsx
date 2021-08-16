import { useState } from "react"
import {todo} from "./global"
import menu from "./icons/menu.svg"
import Items from "./Items"


function Single(   {id,todo}:todo ) {
    const [list,setList]= useState<boolean>(false)
    const [completed,setCompleted]= useState<boolean>(false)
    
          return (
        
      <div className={`single ${completed?"completed" :""}`}  key={id}>
           {list? <Items completed={completed} setCompleted={setCompleted} id={id} setList={setList}/>:null} 
                    <div className="text"><h1>{todo}</h1></div>
                    <div className="dots"   onClick={()=>{
                        setList(!list)
                    }}><img src={menu} alt="menu for each todo"
                   /></div>
                </div>
    )
}


export default Single
