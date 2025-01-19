import About from '@/components/home/About'
import Bio from '@/components/home/Bio'
import Book from '@/components/home/Book'
import Hero from '@/components/home/Hero'
import Membership from '@/components/home/Membership'
import React from 'react'

const HomePage = () => {
  const plans = [
    { id: 1, name: 'Workout Membership', price: 0, features: ['View Members Directory', 'View Members Profile', 'Send Private Messages', 'Add Media To Your Profile'] },
    { id: 2, name: 'Nutrition Membership ', price: 20, features: ['View Members Directory', 'View Members Profile', 'Send Private Messages', 'Add Media To Your Profile'] },
    { id: 3, name: 'Nutrition Membership', price: 60, features: ['Discuss your program', 'Track your progress by scheduling calls periodically', 'Accountability', ' life style coaching'] },
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
