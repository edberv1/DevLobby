import React, { useState } from 'react'
import './PasswordReset.scss'
import ResetPasswordForm from '../../molecules/ResetPasswordForm'
import ResetPasswordConfirm from '../../molecules/ResetPasswordConfirmForm'

const PasswordReset = () => {
  const [identity, setIdentity] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const [error, setError] = useState('')
  const [notFoundMessage, setNotFoundMessage] = useState('')

  function handleChange (e) {
    setIdentity(e.target.value)
  }

  function handleCodeChange (e) {
    setVerificationCode(e.target.value)
  }

  const handleUserVerification = () => {
    if (identity.length < 4) {
      setError('Enter a valid username or email')
      setNotFoundMessage('dadsadas')
    } else {
      console.log('good to go')
      setCodeSent(!codeSent)
      setError('')
    }
  }

  const handleCodeVerification = () => {
    setCodeSent(!codeSent)
  }

  return (
    <>
      <div className='reset-container'>
        {!codeSent ? (
          <ResetPasswordForm
            identity={identity}
            handleChange={handleChange}
            error={error}
            setError={setError}
            notFound={notFoundMessage}
            setNotFound={setNotFoundMessage}
            onButtonClick={handleUserVerification}
          />
        ) : (
          <ResetPasswordConfirm
            verificationCode={verificationCode}
            handleChange={handleCodeChange}
            error={error}
            setError={setError}
            notFound={notFoundMessage}
            setNotFound={setNotFoundMessage}
            onButtonClick={handleCodeVerification}
          />
        )}
      </div>
    </>
  )
}

export default PasswordReset
