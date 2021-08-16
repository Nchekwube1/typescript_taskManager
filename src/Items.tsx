import check from "./icons/check.png"
import del from "./icons/delete.png"
import edit from "./icons/edit.png"
import {globalState, gstate} from "./global"
import {todo} from "./global"
import { useContext } from "react"
function Items({completed,setCompleted,id,setList}:any) {
    const {setIsModal,setTodo,template,setTemplate} = useContext(globalState) as gstate
      const handleEdit = (iden:string)=>{
        const editArr = template.filter((one:todo)=>{
                      return one.id === iden

        })

        const newArr = template.filter((one:todo)=>{
                      return one.id !== iden

        })
        setTemplate(newArr)
        setIsModal(true)
        setTodo(editArr[0].todo)
        setList(false)
         
    }
      const handleDelete = (iden:string)=>{
    
        const newArr = template.filter((one:todo)=>{
                      return one.id !== iden

        })
        setTemplate(newArr)
        setList(false)
         
    }



    return (
          <div className="items ">
                         <div onClick={()=>{setCompleted(!completed)}} ><div className="img"><img src={check} alt="img" /></div><div className="txt"><h1>completed task</h1></div></div>
                        <div onClick={()=>{
                            handleEdit(id)
                        }}><div className="img"><img src={edit} alt="img" /></div><div className="txt"><h1>edit task</h1></div></div>
                        <div onClick={()=>{handleDelete(id)}}><div className="img"><img src={del} alt="img" /></div><div className="txt"><h1>delete task</h1></div></div>
                    </div>
    )
}

export default Items
