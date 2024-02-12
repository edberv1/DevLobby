import React from 'react'
import Navbar from '../../molecules/Navbar'
import ClientHeaderSection from '../../molecules/ClientHeaderSection'
import Cards from '../../organisms/Cards'

const LandingLayout = () => {
  return (
    <div>
      <Navbar />
      <ClientHeaderSection />
      <Cards />
    </div>
  )
}

export default LandingLayout
