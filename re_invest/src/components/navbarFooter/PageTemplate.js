import React from 'react'
// import Footer from './Footer'
import Navbar from './Navbar'


//Will render whatever route we are on
function PageTemplate(props) {
  return (
    <div>
        <Navbar />
        {props.children}
        {/* <Footer /> */}
    </div>
  )
}

export default PageTemplate