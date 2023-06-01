import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    {/* header  */}
    <Header />
    
    {/* dynamic page  */}
    <main style={{minHeight:'35vh'}}>
        {children}
        </main>

    {/* footer  */}
    <Footer />
    </>
  )
}

export default Layout
