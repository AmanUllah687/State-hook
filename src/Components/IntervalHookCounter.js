import React, {useState, useEffect} from 'react'
function IntervalHookCounter() {
    const[count, setCount] = useState(0)
    const tick = () => {
        setCount(PrevCount => PrevCount + 1)
    }
    function doSomething () {
        console.log('someprop')
    }
    useEffect(() => {
        function doSomething () {
            console.log('someprop')
        }
        doSomething()
     const interval = setInterval(tick, 1000)
     return () => {
        clearInterval(interval)
     }
    },['someprop'])
    return (
        <div>
       {count}
        </div>
    )
}
export default IntervalHookCounter