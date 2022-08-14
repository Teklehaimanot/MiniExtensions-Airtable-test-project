import React from 'react'

const Login = () => {
    return (
        <form action="" className='Login-Form'>
            <div>
                <label htmlFor="">Student Name</label>
                <input type="text" placeholder='name' />
            </div>
            <input type="submit" value="Login" />
        </form>

    )
}

export default Login