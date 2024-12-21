import Footer from '@/components/Footer'
import SNavbar from '@/components/SNavbar'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <SNavbar/>
    {children}
    <Footer/>
    </>
  )
}

export default layout