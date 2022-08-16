import React, { Dispatch, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchClasses } from '../state/action'

const Login = () => {

    const [input, setInput] = useState('')
    const dispatch: Dispatch<any> = useDispatch()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(fetchClasses(input))
    }
    return (
        <form action="" className='Login-Form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Student Name</label>
                <input type="text" placeholder='name' value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <input type="submit" value="Login" />
        </form>

    )
}

export default Login