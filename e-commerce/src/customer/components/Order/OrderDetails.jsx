import React, { useEffect } from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTraker from './OrderTraker'
import {Grid,Box} from "@mui/material";
import { deepPurple, green } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action';
const OrderDetails = () => {
    const navigate =useNavigate();
    const dispatch=useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {orderId}=useParams();
    const {order}=useSelector((store)=>store)

    useEffect(()=>{
        dispatch(getOrderById(orderId));
    },[jwt])

  return (
    <div className='px:5 lg:px-20'>
       <div>
        <h1 className='font-semibold text-xl py-7'>Delivery Address</h1>
        <AdressCard address={order?.order?.shippingAddress}/>
        </div> 

        <div className='py-20'>
            <OrderTraker activeStep={order?.order?.orderStatus === "placed" ? 0 :
                        order?.order?.orderStatus === "confirmed" ? 1:
                        order?.order?.orderStatus === "shipped" ?2:4}/>
        </div>

        <Grid container className='space-y-5'>

            {order?.order?.orderItems.map((item)=><Grid item container className='shadow-xl rounded-md p-5' sx={{alignItems:"center",justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top'
                         src={item?.product.imageUrl} alt=""/>

                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>{item.product.title}</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: {item.product.color} </span><span>Size : ´{item.size} </span></p>
                            <p><span>Seller : {item.product.brand}</span></p>
                            <p>{item.discountedPrice} $</p>
                        </div>

                    </div>
                </Grid>

                <Grid item>
                    <Box sx={{color:green[500]}} onClick={()=>navigate(`/account/rate/${item.product.id}`)} className="flex items-center cursor-pointer">
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