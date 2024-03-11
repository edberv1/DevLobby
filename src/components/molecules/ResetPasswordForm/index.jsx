import React from 'react'

const ResetPasswordForm = ({
  email,
  notFound,
  error,
  handleChange,
  onButtonClick
}) => {
  return (
    <div className='reset-form'>
      <div className='divider'>
        <hr />
        Find your DevLobby account <hr />
      </div>
      <p className='message'>
        Enter the email, or username associated with your account to change your
        password.
      </p>
      {error && <div className='error-message'>{error}</div>}
      <div className='email-input'>
        <input
          type='text'
          placeholder='Email or username'
          name='email'
          required
          value={email}
          onChange={handleChange}
        />
      </div>
      {!!notFound && <div className='notFoundMessage'>{notFound}</div>}
      <button onClick={onButtonClick} className='next-btn'>
        Next
      </button>
    </div>
  )
}

export default ResetPasswordForm
