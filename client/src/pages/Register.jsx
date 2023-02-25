import React from 'react'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input type="password" placeholder="Password" name="username" required />
        <input type="password" placeholder="Confirm password" name="username" required />
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Register
