import React from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    <div >

        <div style={{display: "flex", justifyContent: "center", marginTop: "5%"}}>
        <h1>Login Page</h1>
        </div>

        <Button onClick={()=> navigate(-1)}>Back</Button>

    </div>
  )
}

export default Login