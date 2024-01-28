import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>

        <div className='h-[13rem] w-[10rem]'>
            <img  className='object-cover object-top w-full h-full' src='https://www.impericon.com/1536x2220x90/media/catalog/product/f/r/fredperry_twintipped_lg.jpg' alt="" />
        </div>


        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Fred Perry</h3>
            <p className='mt-2 text-sm text-gray-500'>Twin Tipped - T-Shirt</p>
        </div>
    </div>
  )
}

export default HomeSectionCard