import React, {useState, useCallback} from "react";
import Count from './Count'
import Button from './Button'
import Tittle from './Tittle'

 function ParentComponent() {
    const[age, setAge] = useState(25)
    const[salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    },[salary])
    return (
        <div>
            <Tittle />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>increment Salary</Button>

        </div>
    )
 }
 export default ParentComponent