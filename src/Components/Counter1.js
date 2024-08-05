import React  from 'react'
import useCounter from '../hooks/useCounter'
function Counter1() {
    const[count, incerement, decrement, reset] = useCounter(0,1)
    return(
        <div>
        <h2>Count = {count}</h2>
        <button onClick={incerement}>Incerement</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter1