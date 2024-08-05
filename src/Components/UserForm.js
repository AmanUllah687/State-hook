import React, { useState } from 'react'
import useInput from '../hooks/useInput'

function UserForm() {
    const [fName, bindFName, resetFName] = useInput('')
    const [lName, bindLName, resetLName] = useInput('')
    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${fName} ${lName}`)
        resetFName()
        resetLName()
    }

    return(
        <div>
        <form onSubmit={submitHandler} >
            <div>
                <label>First Name</label>
                <input 
                {... bindFName}
                type='text' />
            </div>
            <div>
                <label>Last Name </label>
                <input
                 {... bindLName}
                 type='text' />
            </div>
            <button>Submit</button>
        </form>
        </div>
    )
}
export default UserForm