import React, {useState} from "react";
import HookMouse from "./HookMouse";


function MouseConatiner() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
        <button onClick={() => setDisplay(!display)}>Toggle Display</button>
        {display && <HookMouse />}
        </div>
    )
}
export default MouseConatiner