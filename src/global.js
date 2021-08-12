import { useState, createContext } from "react"
import template from "./Initial"
export const globalState = createContext()

function Global({ children }) {
    const [isModal, setIsModal] = useState(false)
    const [list, setList] = useState(false)
    const [todo, setTodo] = useState("")
    return (
        <globalState.Provider

            value={{
                template,
                isModal,
                setIsModal,
                list,
                setList,
                todo,
                setTodo,
            }}
        >
            {children}
        </globalState.Provider>

    )

}
export default Global