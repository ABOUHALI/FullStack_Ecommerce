import React from 'react'
import MainCarousel from '../../HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../HomeSectionCarousel/HomeSectionCarousel'
import { mens_tshirt } from '../../../../Data/mens_thsirt'
import { mens_hoodies } from '../../../../Data/mens_hoodies'
import { mens_jeans } from '../../../../Data/mens_jeans'

function HomePage() {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_tshirt} sectionName={"Men's Tshirt"} navig={`/men/clothing/mens_tshirt`}/>
            <HomeSectionCarousel data={mens_hoodies} sectionName={"Men's Hoodies"} navig={`/men/clothing/mens_hoodies`}/>
            <HomeSectionCarousel data={mens_jeans} sectionName={"Men's Jeans"} navig={`/men/clothing/mens_jeans`}/>
            <HomeSectionCarousel data={mens_tshirt} sectionName={"Men's Tshirt"} navig={`/men/clothing/mens_tshirt`} />

        </div>
    </div>
  )
}

export default HomePage