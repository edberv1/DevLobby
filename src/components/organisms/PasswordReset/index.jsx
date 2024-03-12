import React, { useContext, useEffect, useState } from 'react'
import './PasswordReset.scss'
import ResetPasswordForm from '../../molecules/ResetPasswordForm'
import ResetPasswordConfirm from '../../molecules/ResetPasswordConfirmForm'
import { AuthService } from '../../../services/AuthService'
import { AuthContext } from '../../../utils/AuthContext'
import { useNavigate } from 'react-router-dom'

const PasswordReset = () => {
  const [email, setEmail] = useState({ email: '' })
  const [verificationCode, setVerificationCode] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const [error, setError] = useState('')
  const [notFoundMessage, setNotFoundMessage] = useState('')
  const { isLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()
  let requestInProgress = false

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
    // eslint-disable-next-line
  }, [isLoggedIn])

  function resetErrors () {
    setError('')
    setNotFoundMessage('')
  }

  function handleEmailChange (e) {
    resetErrors()
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
    if (requestInProgress) return

    if (email.email.length && isValidEmail(email.email)) {
      // api req to send the 6 digit code to email
      requestInProgress = true

      try {
        const response = await AuthService.resetPassword(email)
        console.log(response)

        if (!response.success) {
          setNotFoundMessage(response.message)
        } else {
          setCodeSent(true)
          setNotFoundMessage(false)
        }
      } catch (err) {
        console.error('Error occurred during API request:', err)
      } finally {
        requestInProgress = false
      }
    }
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
            triggerCodeSent={triggerCodeSent}
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
