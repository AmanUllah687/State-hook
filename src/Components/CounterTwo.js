import { type } from "@testing-library/user-event/dist/type";
import React, {useReducer} from "react";

const initailState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action)  => {
    switch(action.type) {
        case 'increment' :
        return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement' :
            return {...state, firstCounter: state.firstCounter - action.value}
            case 'increment2' :
        return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2' :
            return {...state, secondCounter: state.secondCounter - action.value}
            case 'reset' :
                return initailState
                default:
                    return state

    }

}
 
function CounterTwo() {
     const [count, dispatch] = useReducer(reducer, initailState)
    return (
        <div>
            <div>firstCounter- {count.firstCounter}</div>
            <div>secondCounter- {count.secondCounter}</div>
        <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
        <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment5</button>
        <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement5</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <div>
        <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment2</button>
        <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement2</button>
        </div>
        </div>
    )
}
export default CounterTwo