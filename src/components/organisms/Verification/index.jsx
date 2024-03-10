import React, { useEffect, useState } from 'react'
import './Verification.scss'
import { Link, useParams } from 'react-router-dom'
import PageNotFound from '../PageNotFound'
import { AuthService } from '../../../services/AuthService'

const Verification = () => {
  const [validUrl, setValidUrl] = useState()
  const param = useParams()

  useEffect(() => {
    const verifEmailUrl = async () => {
      try {
        const response = await AuthService.verifySignup(param.id, param.token)
        console.log(response)
        setValidUrl(true)
      } catch (error) {
        console.error(error)
        setValidUrl(false)
      }
    }
    verifEmailUrl()
  }, [param])

  return validUrl ? (
    <div className='verification'>
      <div className='container'>
        <div id='success'>Verification successful ✅</div>
        <div className='text2'>You are now a member of our community 💖</div>
        <div className='guide'>
          <Link to='/login'>
            <div className='homeBtn'>Click to login</div>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <PageNotFound />
  )
}

export default Verification
