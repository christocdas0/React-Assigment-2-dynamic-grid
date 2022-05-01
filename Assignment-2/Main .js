import React from 'react'
import Footer from './Footer'
import LatestPost from './LatestPost'
import NavBar from './NavBar'
import './style.scss'

function Main () {
  return (
    <div>
        <NavBar/>
        
        <div className='main-body'>

<LatestPost/>
        </div>
        <Footer/>
         </div>
  )
}

export default Main 