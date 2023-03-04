import  { React, useState } from 'react'
import axios from "axios"

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleInputs  = e => {
    setInputs( prevInputs => ({...prevInputs, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8800/auth/register", inputs)
      console.log(res)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Username" name="username" onChange={handleInputs} required />
        <input type="email" placeholder="Email" name="email" onChange={handleInputs} required />
        <input type="password" placeholder="Password" name="password" onChange={handleInputs} required />
        <input type="password" placeholder="Confirm password" name="confirmation" onChange={handleInputs} required />
        <button className='btn' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Register
