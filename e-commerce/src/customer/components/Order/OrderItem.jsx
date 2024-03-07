import React from 'react'
import {Grid} from '@mui/material'

const OrderItem = () => {
  return (
    <div>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/369268835_261414970059763_5162732945984876260_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=GYLFSusfXO0AX8MdFUz&_nc_oc=AQm-0x9xOz2VD8EhNxzxSVk-OpPH_qnbmta1XoH-dzP2XTDnvegW-ja_Camt8zN73vk&_nc_ht=scontent-dus1-1.xx&oh=00_AfAPBOFasrQEsoBQ2elaceSb55H4FJYoVgUSZ24GZNe-uA&oe=65E36F2F" alt=""/>
                    <div className='ml-5 space-y-2'>
                        <p className=''>CODM Home Shirt 23/24</p>
                        <p className='opacity-50 text-xs font-semibold '>Size : M</p>
                        <p className='opacity-50 text-xs font-semibold '>Color: White</p>
                    </div>
                </div>
            </Grid>


            <Grid item xs={2}>
                 <p>21 $</p>   
            </Grid>

            <Grid item xs={2}>
                
            </Grid>

        </Grid>
    </div>
  )
}

export default OrderItem