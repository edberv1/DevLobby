import React, { useState } from 'react'
import { AuthService } from '../../services/AuthService'

const Login = () => {
  const [loginCred, setLoginCred] = useState({
    email: '',
    password: ''
  })

  function onChange (e) {
    const name = e.target.name
    const value = e.target.value
    setLoginCred({ ...loginCred, [name]: value })
  }

  async function handleLogin () {
    const response = await AuthService.login(loginCred)
    console.log(response)
  }

  return (
    <>
      <div>
        <div className='loginForm'>
          <div>
            <label htmlFor='email'>Email Address</label>
            <input type='email' id='email' name='email' onChange={onChange} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              onChange={onChange}
            />
          </div>
        </div>
        <div>
          <div>Forgot Password?</div>
          <div className='button' onClick={handleLogin}>
            Sign in
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
