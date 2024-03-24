import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { store } from '../../../State/store'
import { getOrderById } from '../../../State/Order/Action'
import { updatePayment } from '../../../State/Payment/Action'
import { Alert, AlertTitle, Grid } from '@mui/material'
import OrderTraker from '../Order/OrderTraker'
import AdressCard from '../AdressCard/AdressCard'

const PaymentSuccess = () => {
    const [paymentId,setPaymentId]=useState()
    const [referencedId,setReferencedId]=useState()
    const [paymentStatus,setPaymentStatus]=useState()
    const {orderId}=useParams()
    const dispatch=useDispatch();
    const {order}=useSelector(store=>store)
    console.log("orderId",orderId)

    useEffect(()=>{
         const urlParam=new URLSearchParams(window.location.search);
        setPaymentId(urlParam.get("payment_url"))
        setPaymentStatus(urlParam.get(""))
    },[])
    console.log(order.order)

    useEffect(()=>{
        const data={orderId,paymentId}
        dispatch(getOrderById(orderId))
        dispatch(updatePayment(data))
      
    },[orderId,paymentId])
  return (
    <div className='px-2 lg:px-36'>
        <div className='flex flex-col justify-center items-center'>
            <Alert variant='filled' severity='success' sx={{mb:6,width:"fit-contentd"}}>
                    <AlertTitle>Paymemnt success</AlertTitle>
                    CongratulatioN! Your order get PLACED

            </Alert>
            <OrderTraker activeStep={1}/>
            {[1,2,2].map((item)=><Grid container className='space-y-5 py-5 pt-20'>
                    <Grid container item sx={{alignItems:"center",justifyContent:"space-between"}} className='shadow-xl rounded-md p-5 '>
                        <Grid item xs={6}>
                            <div className='flex items-center'>
                                <img className='w-[5rem] h-[5rem] object-cover object-top ' src='https://www.creativefabrica.com/wp-content/uploads/2019/06/Watermelon-fruit-fresh-logo-vector-by-DEEMKA-STUDIO.jpg' alt=''/>
                                <div>
                                    <p>item.product.title</p>
                                    <div className='opacity-50 text-xs font-semibold space-x-5'>
                                        <span>Color: item.color</span>
                                        <span>Size: item.size</span>
                                    </div>
                                    <p>Seller:item.product.brand</p>
                                    <p>$ item.price</p>
                                </div>
                            
                            </div>
                        </Grid>
                        <Grid item>
                            <AdressCard address={''}/>
                        </Grid>
                    </Grid>
            </Grid>)}

        </div>

    </div>
  )
}

export default PaymentSuccess