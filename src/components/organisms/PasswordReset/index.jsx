import React, { useState } from 'react'
import './PasswordReset.scss'
import ResetPasswordForm from '../../molecules/ResetPasswordForm'
import ResetPasswordConfirm from '../../molecules/ResetPasswordConfirmForm'
import { AuthService } from '../../../services/AuthService'

const PasswordReset = () => {
  const [email, setEmail] = useState({ email: '' })
  const [verificationCode, setVerificationCode] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const [error, setError] = useState('')
  const [notFoundMessage, setNotFoundMessage] = useState('')

  function handleEmailChange (e) {
    setEmail({ email: e.target.value })
  }

  function handleCodeChange (e) {
    setVerificationCode(e.target.value)
  }

  function isValidEmail (email) {
    const pattern =
      // eslint-disable-next-line
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g
    const result = pattern.test(email)

    if (result !== true) {
      setError('Not a valid email format')
      return false
    } else {
      setError('')
      return true
    }
  }

  const handleCodeRequest = async () => {
    if (email.email.length && isValidEmail(email.email)) {
      // api req to send the 6 digit code to email
      const response = await AuthService.resetPassword(email)
      console.log(response)

      if (!response.success) {
        setNotFoundMessage(response.message)
      } else {
        setCodeSent(true)
        setNotFoundMessage(false)
      }

      //api checks if email is in database, if so
      // api sends a 6 digit code to that email,
      // else api returns an error message saying
      // no account is associated to this email
    }

    // if (email.length < 4) {
    //   setError('Enter a valid username or email')
    //   // setNotFoundMessage('dadsadas')
    // } else {
    //   console.log('good to go')
    //   setCodeSent(!codeSent)
    //   setError('')
    // }
  }

  const triggerCodeSent = () => {
    setCodeSent(!codeSent)
    setNotFoundMessage('')
  }

  return (
    <>
      <div className='reset-container'>
        {!codeSent ? (
          <ResetPasswordForm
            email={email.email}
            handleChange={handleEmailChange}
            error={error}
            setError={setError}
            triggerCodeSent={triggerCodeSent}
            notFound={notFoundMessage}
            setNotFound={setNotFoundMessage}
            onButtonClick={handleCodeRequest}
          />
        ) : (
          <ResetPasswordConfirm
            verificationCode={verificationCode}
            handleChange={handleCodeChange}
            error={error}
            setError={setError}
            notFound={notFoundMessage}
            setNotFound={setNotFoundMessage}
            onButtonClick={triggerCodeSent}
          />
        )}
      </div>
    </>
  )
}

export default PasswordReset
