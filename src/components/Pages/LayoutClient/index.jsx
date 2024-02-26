import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../molecules/Navbar'
import { AuthContext } from '../../../utils/AuthContext'

const ClientLayout = () => {
  const { login, logout } = useContext(AuthContext)

  return (
    <>
      <div>
        <button onClick={() => login('test')}>Login</button>
        <button onClick={logout}>Logout</button>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default ClientLayout
