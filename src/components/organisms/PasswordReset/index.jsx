import React, { useContext, useEffect, useState } from 'react'
import './PasswordReset.scss'
import { AuthService } from '../../../services/AuthService'
import { AuthContext } from '../../../utils/AuthContext'
import { useNavigate } from 'react-router-dom'
import ResetPasswordForm from '../../molecules/ResetPasswordForm'
import ConfirmCodeForm from '../../molecules/ConfirmCodeForm'
import NewPasswordForm from '../../molecules/NewPasswordForm'

const PasswordReset = () => {
  const [user, setUser] = useState({ email: '' })
  const [verificationCode, setVerificationCode] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const [stage, setStage] = useState(1)
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
    setUser({ email: e.target.value })
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

    if (user.email.length && isValidEmail(user.email)) {
      // api req to send the 6 digit code to email
      requestInProgress = true

      try {
        const response = await AuthService.reqResetCode(user)
        console.log(response)

        if (!response.success) {
          setNotFoundMessage(response.message)
        } else {
          setUser(response.user)
          triggerCodeSent(2)
          setNotFoundMessage(false)
        }
      } catch (err) {
        console.error('Error occurred during API request:', err)
      } finally {
        requestInProgress = false
      }
    }
  }

  const handleCodeVerification = async () => {
    if (requestInProgress) return
    if (!verificationCode) return

    requestInProgress = true
    try {
      const response = await AuthService.verifyResetCode({
        id: user._id,
        code: verificationCode
      })

      if (!response.success) {
        setNotFoundMessage(response.message)
      } else {
        setNotFoundMessage('')
        triggerCodeSent(3)
        console.log('success')
      }
    } catch (err) {
      console.error('Error occured during API req:', err)
    } finally {
      requestInProgress = false
    }
  }

  const triggerCodeSent = value => {
    setCodeSent(!codeSent)
    setStage(value)
    setNotFoundMessage('')
    setVerificationCode('')
  }

  let output

  switch (stage) {
    case 1:
      output = (
        <ResetPasswordForm
          email={user.email}
          handleChange={handleEmailChange}
          error={error}
          setError={setError}
          triggerCodeSent={triggerCodeSent}
          notFound={notFoundMessage}
          setNotFound={setNotFoundMessage}
          onButtonClick={handleCodeRequest}
        />
      )
      break
    case 2:
      output = (
        <ConfirmCodeForm
          verificationCode={verificationCode}
          handleChange={handleCodeChange}
          error={error}
          setError={setError}
          triggerCodeSent={triggerCodeSent}
          notFound={notFoundMessage}
          setNotFound={setNotFoundMessage}
          onButtonClick={handleCodeVerification}
        />
      )
      break
    case 3:
      output = (
        <NewPasswordForm
          handleChange={() => {}}
          error={error}
          setError={setError}
          triggerCodeSent={triggerCodeSent}
          notFound={notFoundMessage}
          setNotFound={setNotFoundMessage}
          onButtonClick={() => {}}
        />
      )
      break
    default:
      output = (
        <ResetPasswordForm
          email={user.email}
          handleChange={handleEmailChange}
          error={error}
          setError={setError}
          triggerCodeSent={triggerCodeSent}
          notFound={notFoundMessage}
          setNotFound={setNotFoundMessage}
          onButtonClick={handleCodeRequest}
        />
      )
      break
  }

  return (
    <>
      <div className='reset-container'>{output}</div>
    </>
  )
}

export default PasswordReset
