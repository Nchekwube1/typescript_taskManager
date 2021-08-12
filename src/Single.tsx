// import {globalState} from "./global"
import { useState } from "react"
import {todo} from "./Initial"
import menu from "./icons/menu.svg"
import Items from "./Items"
function Single(   {id,todo}:todo ) {
    const [list,setList]= useState(false)
    
    return (
        
      <div className="single" key={id}>
           {list? <Items/>:null} 
                    <div className="text"><h1>{todo}</h1></div>
                    <div className="dots"  onClick={()=>{
                        setList(!list)
                    }}><img src={menu} alt="menu for each todo"
                   /></div>
                </div>
    )
}


export default Single
