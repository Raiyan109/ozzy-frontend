import About from '@/components/home/About'
import Bio from '@/components/home/Bio'
import Book from '@/components/home/Book'
import Hero from '@/components/home/Hero'
import Membership from '@/components/home/Membership'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Membership />
      <Bio />
      <Book />
    </div>
  )
}

export default HomePage
