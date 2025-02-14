import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let name = useRef()
    let password = useRef()
    let navigate = useNavigate()
    let demo = () => {
      name.current.value === "admin" && password.current.value === "admin@123" ?
      navigate("/dashboard") : navigate("/error")
    }
  return (
    <div>
        <form action="">
            Name : <input type="text" name="" id="" ref={name} />
            <br />
            Password : <input type="password" name="" id="" ref={password} />
            <br />
            <button onClick={demo}>submit</button>
        </form>
    </div>
  )
}

export default Login
