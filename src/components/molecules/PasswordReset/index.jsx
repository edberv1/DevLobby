import React, { useState } from 'react'
import './PasswordReset.scss'
import Logo from '../../../assets/images/icon.png'

const PasswordReset = () => {
  const [identity, setIdentity] = useState('')
  function handleChange () {}

  return (
    <>
      <div className='reset-container'>
        <form className='reset-form'>
          <img src={Logo} alt='Logo' className='devlobby-logo' />
          <div className='divider'>
            <hr />
            Find your DevLobby account <hr />
          </div>
          <p className='message'>
            Enter the email, or username associated with your account to change
            your password.
          </p>
          <div className='email-input'>
            <input
              type='text'
              placeholder='Email or username'
              name='email'
              required
              value={identity}
              onChange={handleChange}
            />
          </div>
          <button className='next-btn'>Next</button>
        </form>
      </div>
    </>
  )
}

export default PasswordReset
