import React from 'react'
import useCounter from './hooks/useCounter'
function Counter2() {
    const[count, incerement, decrement, reset] = useCounter(10,10)
    return(
        <div>
        <h2>Count = {count}</h2>
        <button onClick={incerement}>Incerement</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter2