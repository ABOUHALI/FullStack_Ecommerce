import { api } from "../../config/apiConfig"
import { CREATE_ORDER_REQUEST } from "../Order/ActionType"
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType";

export const  createPayment=(orderId)=>async(dispatch)=>{
    dispatch({type:CREATE_ORDER_REQUEST})
    try {
        const {data}=await api.post(`/api/payments/${orderId}`,
                    {});
        console.log("create",data)
        if(data.payment_url){
            window.location.href=data.payment_url;
        }
        
        dispatch({type:CREATE_PAYMENT_SUCCESS,payload:data})

    } catch (error) {
        dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message})
        
    }
}

export const  updatePayment=(reqData)=>async(dispatch)=>{
    console.log("updatedOayment",reqData)
    dispatch({type:UPDATE_PAYMENT_REQUEST})
    try {
        const {data}=await api.get(`/api/payments?payment_link_id=${reqData.payment_link_id}&order_id=${reqData.orderId}`,reqData);
        console.log("update_payment",data)
        dispatch({type:UPDATE_PAYMENT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:UPDATE_PAYMENT_FAILURE
            ,payload:error.message})
        
    }
}