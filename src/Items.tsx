import check from "./icons/check.png"
import del from "./icons/delete.png"
import edit from "./icons/edit.png"
function Items() {
    return (
          <div className="items">
                         <div><div className="img"><img src={check} alt="img" /></div><div className="txt"><h1>completed task</h1></div></div>
                        <div><div className="img"><img src={edit} alt="img" /></div><div className="txt"><h1>edit task</h1></div></div>
                        <div><div className="img"><img src={del} alt="img" /></div><div className="txt"><h1>delete task</h1></div></div>
                    </div>
    )
}

export default Items
