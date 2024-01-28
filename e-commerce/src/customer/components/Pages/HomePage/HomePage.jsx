import React from 'react'
import MainCarousel from '../../HomeCarousel/MainCarousel'
import HomeSectionCard from '../../HomeSectionCard/HomeSectionCard'

function HomePage() {
  return (
    <div>
        <MainCarousel/>
        <div>
            <HomeSectionCard/>
        </div>
    </div>
  )
}

export default HomePage