import About from '@/components/home/About'
import Bio from '@/components/home/Bio'
import Book from '@/components/home/Book'
import Hero from '@/components/home/Hero'
import Membership from '@/components/home/Membership'
import React from 'react'

const HomePage = () => {
  const plans = [
    { id: 1, name: '3 days trial', price: 0, features: ['Feature 1', 'Feature 2'] },
    { id: 2, name: 'Pro', price: 20, features: ['Feature 1', 'Feature 2', 'Feature 3'] },
  ]
  return (
    <div>
      <Hero />
      <About />
      <Membership plans={plans} />
      <Bio />
      <Book />
    </div>
  )
}

export default HomePage
