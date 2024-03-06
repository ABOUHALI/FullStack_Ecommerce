import { IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/base';
const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src='https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/369268835_261414970059763_5162732945984876260_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=GYLFSusfXO0AX8MdFUz&_nc_oc=AQm-0x9xOz2VD8EhNxzxSVk-OpPH_qnbmta1XoH-dzP2XTDnvegW-ja_Camt8zN73vk&_nc_ht=scontent-dus1-1.xx&oh=00_AfAPBOFasrQEsoBQ2elaceSb55H4FJYoVgUSZ24GZNe-uA&oe=65E36F2F' alt=''/>
                
            </div>

            <div className='ml-5 spae-y-1'>
                    <p className='font-semibold'>CODM Home Shirt 23/24</p>
                    <p className='opacity-70'>Size: L , White</p>
                    <p className='opacity-70 mt-2'>Seller : STORE CODM </p>
                    <div className='flex space-x-5 items-center text-gray-900 pt-6 '>
                            <p className='font-semibold'>$ 21</p>
                            <p className='opacity-50 line-through'>$ 35</p>
                            <p className='text-green-600 font-semibold'>40% off</p>
                    </div>
            </div>

            
        </div>

        <div className='lg:flex items-center lg:space-x-10 pt-4'>
            <div className='flex items-center space-x-2'>
                <IconButton>
                    <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className='py-1 px-7 border rounded-sm'>2</span>
                    <IconButton sx={{color:"#03A678"}}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
            </div>

            <div>
                <Button > Remove </Button>
            </div>
        </div>
    </div>
  )
}

export default CartItem