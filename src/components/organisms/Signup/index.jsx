import React, { useContext, useEffect, useRef, useState } from 'react'
import './Signup.scss'
import SignupImage from '../../../assets/images/Signup-image.png'
import DevLobbyLogoIcon from '../../../assets/images/icon.png'
import { AuthService } from '../../../services/AuthService'
import Navbar from '../../molecules/Navbar'
import Animation from '../../../assets/images/boygirlanimation.mp4'
import { AuthContext } from '../../../utils/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [signupCreds, setSignupCreds] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const [isSignupSuccess, setIsSignupSuccess] = useState(false)
  const { isLoggedIn } = useContext(AuthContext)
  const usernameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
    // eslint-disable-next-line
  }, [isLoggedIn])

  useEffect(() => {
    document.addEventListener('mousedown', handleFocusChange)
    return () => {
      document.removeEventListener('mousedown', handleFocusChange)
    }
  })

  const handleFocusChange = e => {}

  function isValidUsername (username) {
    // eslint-disable-next-line
    const pattern = /^[0-9A-Za-z]{4,16}$/
    const result = pattern.test(username)

    if (result !== true) {
      setError('Not a valid username')
      return false
    } else {
      setError('')
      return true
    }
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

  function isValidStrongPassword (password) {
    // eslint-disable-next-line
    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/
    const result = pattern.test(password)

    if (password.length < 8) {
      setError('Password too short.')
      return false
    } else if (result !== true) {
      setError(
        'Weak password. Must include at least an uppercase, lowercase, symbol and a number.'
      )
      return false
    } else {
      setError('')
      return true
    }
  }

  const handleSignup = async () => {
    if (
      !isValidUsername(signupCreds.username) ||
      !isValidEmail(signupCreds.email) ||
      !isValidStrongPassword(signupCreds.password)
    ) {
      return
    }

    try {
      const response = await AuthService.signup(signupCreds)
      // TODO: must improve check
      if (typeof response === 'string' && response.startsWith('Failed to')) {
        setError(
          'Sorry, we could not connect with the server. Please try again in a few minutes.'
        )
      } else if (response.error) {
        setError(response.error)
      } else {
        setIsSignupSuccess(true)
      }
    } catch (error) {
      setError('Failed to sign up. Please try again.')
    }
    console.log('TeST')
  }

  const handleChange = e => {
    setSignupCreds({ ...signupCreds, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Navbar />
      <div className='signup-container'>
        {/* Conditionally render the form or success message */}
        {isSignupSuccess ? (
          <div className='success-message'>
            You have successfully created an account.🥂
            <br />
            <video src={Animation} autoPlay loop muted></video>
          </div>
        ) : (
          <>
            <div className='signup-form'>
              <h2>Sign Up</h2>
              <img src={DevLobbyLogoIcon} alt='DevLobby Logo' />
              <p>See your growth and get consulting support!</p>
              <div className='divider'>
                <hr />
                Sign up with Email <hr />
              </div>
              {error && <div className='error-message'>{error}</div>}
              <div>
                <input
                  type='text'
                  ref={usernameRef}
                  placeholder='Username'
                  name='username'
                  required
                  value={signupCreds?.username}
                  onChange={handleChange}
                />
                <input
                  type='email'
                  ref={emailRef}
                  placeholder='Email'
                  name='email'
                  required
                  value={signupCreds?.email}
                  onChange={handleChange}
                />
                <input
                  type='password'
                  ref={passwordRef}
                  placeholder='Password'
                  name='password'
                  minLength='8'
                  required
                  value={signupCreds?.password}
                  onChange={handleChange}
                />
                <button onClick={handleSignup} className='signup-btn'>
                  Sign Up
                </button>
              </div>
              <div className='signin-redirect'>
                Already have an Account? <a href='/login'>Sign in</a>
              </div>
              <footer>©2024 Nexus. All rights reserved.</footer>
            </div>
            <div className='signup-image-section'>
              <img src={SignupImage} alt='DevLobby Signup' />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default SignUp
