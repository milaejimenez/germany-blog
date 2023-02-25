import React from 'react'

const Login = () => {
  return (
      <div className='auth'>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" name="username" required />
          <input type="password" placeholder="Password" name="username" required />
          <p className='error-msg'></p>
          <button className='btn'>Submit</button>
        </form>
        <span>Don't have an account? <a href='/register'>Register</a></span>
      </div>
  )
}

export default Login
