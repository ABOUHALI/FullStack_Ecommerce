import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTraker from './OrderTraker'
import {Grid,Box} from "@mui/material";
import { deepPurple, green } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
       <div>
        <h1 className='font-semibold text-xl py-7'>Delivery Address</h1>
        <AdressCard/>
        </div> 

        <div className='py-20'>
            <OrderTraker activeStep={3}/>
        </div>

        <Grid container className='space-y-5'>

            {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5' sx={{alignItems:"center",justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/369268835_261414970059763_5162732945984876260_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=GYLFSusfXO0AX8MdFUz&_nc_oc=AQm-0x9xOz2VD8EhNxzxSVk-OpPH_qnbmta1XoH-dzP2XTDnvegW-ja_Camt8zN73vk&_nc_ht=scontent-dus1-1.xx&oh=00_AfAPBOFasrQEsoBQ2elaceSb55H4FJYoVgUSZ24GZNe-uA&oe=65E36F2F" alt=""/>

                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>CODM Home Shirt 23/24</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: red </span><span>Size : M </span></p>
                            <p><span>Seller : CODM Store</span></p>
                            <p>21 $</p>
                        </div>

                    </div>
                </Grid>

                <Grid item>
                    <Box sx={{color:green[500]}} className="flex items-center cursor-pointer">
                        <StarBorderIcon sx={{fontSize:"2rem"}}  className="px-2"/>
                        <span>Rate & Review Product</span>
                    </Box>
                </Grid>

            </Grid>)}
            
        </Grid>

    </div>
  )
}

export default OrderDetails