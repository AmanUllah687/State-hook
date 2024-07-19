import React, {useReducer} from "react";

const initailState = 0
const reducer = (state, action)  => {
    switch(action) {
        case 'increment' :
        return state + 1
        case 'decrement' :
            return state - 1
            case 'reset' :
                return initailState
                default:
                    return state

    }

}
 
function CounterOne() {
     const [count, dispatch] = useReducer(reducer, initailState)
    return (
        <div>
            <div>Count - {count}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}
export default CounterOne