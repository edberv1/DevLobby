import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../molecules/Navbar'
import SearchBar from '../../molecules/SearchBar'

const ClientLayout = () => {
  const userData = [
    {
      username: 'testUsername',
      firstName: 'Filan',
      lastName: 'Fisteku',
      email: 'filanf@gmail.com',
      password: 'test',
      isAdmin: false,
      dateOfBirth: ''
    },
    {
      username: 'johnDoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      isAdmin: false,
      dateOfBirth: '1990-05-15'
    },
    {
      username: 'janeDoe',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
      password: 'password456',
      isAdmin: false,
      dateOfBirth: '1985-09-20'
    },
    {
      username: 'adminUser',
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@example.com',
      password: 'admin123',
      isAdmin: true,
      dateOfBirth: '1978-03-10'
    },
    {
      username: 'aliceSmith',
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice.smith@example.com',
      password: 'alicepassword',
      isAdmin: false,
      dateOfBirth: '1988-12-02'
    },
    {
      username: 'bobJohnson',
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bob.johnson@example.com',
      password: 'bob123',
      isAdmin: false,
      dateOfBirth: '1995-07-25'
    }
  ]

  return (
    <>
      <div>
        <Navbar />
        <SearchBar data={userData} />
        <Outlet />
      </div>
    </>
  )
}

export default ClientLayout
