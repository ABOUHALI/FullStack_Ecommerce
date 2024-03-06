import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
            <AdressCard/>

        </div>

        <div>
        <div className='lg:grid grid-cols-3  relative'>
            <div className='col-span-2'>
                {[1,1,1,1].map((item)=><CartItem/>)}
            </div>

            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 '>
                <div className='border p-5 ibg-white shadow-lg rounded-md'>
                    <p className='font-bold opacity-60 pb-4'>Price Details</p>
                    <hr/>
                    <div className='space-y-3 font-semibold'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price(4 items)</span>
                            <span>$140</span>
                        </div>

                        <div className='flex justify-between'>
                            <span>Discount</span>
                            <span className='text-green-600'>-$56</span>
                        </div>

                        <div className='flex justify-between'>
                            <span>Delivery Charges</span>
                            <span className='text-green-600'>Free</span>
                        </div>
                        <hr/>
                        <div className='flex justify-between text-lg  font-bold'>
                            <span>Total</span>
                            <span className='text-green-600'>$84</span>
                        </div>
                    </div>
                    
                    <Button type='submit' variant='contained' className='w-full mt-5'
                        sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}>
                        Check out
                    </Button>

                </div>
            </div>
        
            
        
        </div>
    </div>
    </div>
  )
}

export default OrderSummary