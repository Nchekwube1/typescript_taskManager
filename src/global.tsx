import { FC } from "react"
import { useState, createContext } from "react"
export interface todo {
  todo:string,
  id:string,
  _id:string
}
export interface gstate{
    template: todo[];
    isModal:boolean;
    setIsModal:(bool: boolean) => void;
    todo:string;
    setTodo:(str: string) => void;
    setTemplate:(todo:todo[]) => void;

}




export const globalState = createContext<gstate|undefined>(undefined)



const Global:FC =({children})=> {
    const [isModal, setIsModalx] = useState<boolean>(false)
    const [todo, setTodox] = useState("")
    const [template, setTemplatex] = useState<todo[]>([])

    const setIsModal = (bool:boolean)=>{
        setIsModalx(bool)
    }
    const setTodo = (str:string)=>{
        setTodox(str)
    }
    const setTemplate = (todo:todo[])=>{
        setTemplatex(todo)
    }

    return (
        <globalState.Provider
            value={{
                template,
                isModal,
                setIsModal,
                todo,
                setTodo,
                setTemplate
            }}
        >
            {children}
        </globalState.Provider>


    )

}
export default Global