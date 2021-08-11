import cancel from "./icons/cancel.svg"
import menu from "./icons/menu.svg"
import Items from "./Items"
import "./scss/body.css"
import Add from "./Add"
function Body() {
    return (
        <div className="body">
      {/* <Add/> */}
            <div className="plus">
              <div className="img">
           <img src={cancel} alt="add todo" />
              </div>
            </div>
            <div className="main">
                <div className="single">
                    <div className="txt"><h1>wash the dishes</h1></div>
                    <div className="dots"><img src={menu} alt="menu for each todo" /></div>
                 <Items/>
                       
                </div>
            </div>
        </div>
    )
}

export default Body
