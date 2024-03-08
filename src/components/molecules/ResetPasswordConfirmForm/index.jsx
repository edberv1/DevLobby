import React from 'react'

const ResetPasswordConfirm = ({
  error,
  verificationCode,
  notFound,
  handleChange,
  onButtonClick
}) => {
  return (
    <div className='reset-form'>
      <div className='divider'>
        <hr />
        We sent you a code <hr />
      </div>
      <p className='message'>
        Check your email to get your confirmation code. If you need to request a
        new code, go back and redo the process.
      </p>
      {error && <div className='error-message'>{error}</div>}
      <div className='email-input'>
        <input
          type='text'
          placeholder='6 digit code'
          name='code'
          value={verificationCode}
          required
          onChange={handleChange}
        />
      </div>
      {!!notFound && <div className='notFoundMessage'>{notFound}</div>}
      <button onClick={onButtonClick} className='next-btn'>
        Confirm
      </button>
    </div>
  )
}

export default ResetPasswordConfirm
