import React, { useContext, useEffect, useState } from 'react'
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
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
    // eslint-disable-next-line
  }, [isLoggedIn])

  const handleSignup = async e => {
    e.preventDefault()
    setError('')

    try {
      const response = await AuthService.signup(signupCreds)
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
              {error && <div className='error-message'>{error}</div>}
              <div className='divider'>
                <hr />
                Sign up with Email <hr />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Username'
                  name='username'
                  required
                  value={signupCreds?.username}
                  onChange={handleChange}
                />
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  required
                  value={signupCreds?.email}
                  onChange={handleChange}
                />
                <input
                  type='password'
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
