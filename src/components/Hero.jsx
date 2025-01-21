import React from 'react'
import Categories from './HeroSubPages/Categories'
import PopularProduct from './HeroSubPages/PopularProduct'
import ExploreMore from './HeroSubPages/ExploreMore'

const Hero = () => {
  return (
    <div className=''>
      <Categories/>
      <PopularProduct/>
      {/* <ExploreMore/> */}
    </div>
  )
}

export default Hero
