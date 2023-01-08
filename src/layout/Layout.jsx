import React from 'react'
import Category from '../component/Category'
import Food from '../component/Food'
import Footer from '../component/Footer'
import HeadlineCards from '../component/HeadlineCards'
import Hero from '../component/Hero'
import Navbar from '../component/Navbar'

function Layout() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HeadlineCards/>
        <Food/>
        <Category/>
        <Footer/>
    </div>
  )
}

export default Layout
