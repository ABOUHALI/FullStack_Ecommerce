import React from 'react'
import MainCarousel from '../../HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../HomeSectionCarousel/HomeSectionCarousel'
import { mens_tshirt } from '../../../../Data/mens_thsirt'

function HomePage() {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_tshirt} sectionName={"Men's Tshirt"}/>
            <HomeSectionCarousel data={mens_tshirt} sectionName={"Men's Tshirt"}/>
            <HomeSectionCarousel data={mens_tshirt} sectionName={"Men's Tshirt"}/>
            <HomeSectionCarousel data={mens_tshirt} sectionName={"Men's Tshirt"}/>

        </div>
    </div>
  )
}

export default HomePage