import React, { useState } from 'react'
import './PasswordReset.scss'

const PasswordReset = () => {
  const [identity, setIdentity] = useState('')
  const [error, setError] = useState('')
  const [accountNotFound, setAccountNotFound] = useState(true)

  function handleChange (e) {
    setIdentity(e.target.value)
  }

  const handleVerification = () => {
    if (identity.length < 4) {
      setError('Enter a valid username or email')
    } else {
      console.log('good to go')
      setError('')
    }
  }

  return (
    <>
      <div className='reset-container'>
        <div className='reset-form'>
          <div className='divider'>
            <hr />
            Find your DevLobby account <hr />
          </div>
          <p className='message'>
            Enter the email, or username associated with your account to change
            your password.
          </p>
          {error && <div className='error-message'>{error}</div>}
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
          {accountNotFound && (
            <div className='accountNotFound'>
              {'Sorry, we could not find your account'}
            </div>
          )}
          <button onClick={handleVerification} className='next-btn'>
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default PasswordReset
