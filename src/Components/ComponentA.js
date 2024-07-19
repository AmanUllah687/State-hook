import React, {useContext} from "react";
import { CountCountext } from "../App";

function ComponentA() {
    const countCountext = useContext(CountCountext)
    return (
        <div>
        ComponentA - {countCountext.countState}
        <button onClick={() => countCountext.countDispatch('increment')}>Increment</button>
        <button onClick={() => countCountext.countDispatch('decrement')}>Decrement</button>
        <button onClick={() => countCountext.countDispatch('reset')}>Reset</button>
        </div>
    )
}
export default ComponentA