import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { store } from '../../../State/store'
import { getOrderById } from '../../../State/Order/Action'
import { updatePayment } from '../../../State/Payment/Action'
import { Alert, AlertTitle, Grid } from '@mui/material'
import OrderTraker from '../Order/OrderTraker'
import AdressCard from '../AdressCard/AdressCard'
import { api } from '../../../config/apiConfig'

const PaymentSuccess = () => {
    const [paymentId,setPaymentId]=useState('')
    async function getPaymentId() {
        try {
            const response = await api.post('api/payments/' + orderId);
            const data = response.data;
            const paymentLinkId = data.payment_link_id;
            console.log(paymentLinkId);
            return paymentLinkId;
        } catch (error) {
            console.error('Error fetching payment ID:', error);
            throw error; // Propagate the error to the caller if needed
        }
    }
    

    const {orderId}=useParams()
    const dispatch=useDispatch();
    const {order,payment}=useSelector(store=>store)
    //const {paymentlinkid}=useSelector(state=>state.paymentReducer)
    

    useEffect(() => {
        const fetchPaymentIdAndUpdate = async () => {
            try {
                const payment_link_id = await getPaymentId(); // Await the result of getPaymentId
                const data = { orderId, payment_link_id };
                dispatch(getOrderById(orderId));
                dispatch(updatePayment(data));
            } catch (error) {
                console.error('Error:', error);
                // Handle error if needed
            }
        };

        fetchPaymentIdAndUpdate(); // Call the async function inside useEffect
    }, [orderId, dispatch]);
  return (
    <div className='px-2 lg:px-36'>
        <div className='flex flex-col justify-center items-center'>
            <Alert variant='filled' severity='success' sx={{mb:6,width:"fit-contentd"}}>
                    <AlertTitle>Paymemnt success</AlertTitle>
                    CongratulatioN! Your order get PLACED

            </Alert>
            <OrderTraker activeStep={1}/>
            {order.order?.orderItems.map((item)=><Grid container className='space-y-5 py-5 pt-20'>
                    <Grid container item sx={{alignItems:"center",justifyContent:"space-between"}} className='shadow-xl rounded-md p-5 '>
                        <Grid item xs={6}>
                            <div className='flex items-center'>
                                <img className='w-[5rem] h-[5rem] object-cover object-top ' src='https://www.creativefabrica.com/wp-content/uploads/2019/06/Watermelon-fruit-fresh-logo-vector-by-DEEMKA-STUDIO.jpg' alt=''/>
                                <div>
                                    <p>{item.product.title}</p>
                                    <div className='opacity-50 text-xs font-semibold space-x-5'>
                                        <span>Color: {item.color}</span>
                                        <span>Size: {item.size}</span>
                                    </div>
                                    <p>Seller:{item.product.brand}</p>
                                    <p>$ {item.price}</p>
                                </div>
                            
                            </div>
                        </Grid>
                        <Grid item>
                            <AdressCard address={order.order?.shippingAddress}/>
                        </Grid>
                    </Grid>
            </Grid>)}

        </div>

    </div>
  )
}

export default PaymentSuccess