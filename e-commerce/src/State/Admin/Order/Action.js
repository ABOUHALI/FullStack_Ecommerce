import { api } from "../../../config/apiConfig";
import { CANCELED_ORDER_FAILURE, CANCELED_ORDER_REQUEST, CANCELED_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, SET_STATUS_ORDER_REQUEST, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType"

export const getOrders=()=>{
    return async(dispatch)=>{
        dispatch({type:GET_ORDERS_REQUEST});
        try {
            const response = await api.get(`/api/admin/order/`);
            dispatch({type:GET_ORDERS_SUCCESS,payload:response.data})
        } catch (error) {
            console.log(error);
            dispatch({type:GET_ORDERS_FAILURE,error:error.message})
        }
    }
}


export const confirmOrder=(orderId)=>async(dispatch)=>{
    dispatch({type:CONFIRMED_ORDER_REQUEST});
    try {
        const resp = await api.put(`/api/admin/order/${orderId}/confirmed`);
        console.log("confirmed _ order",resp.data);
        dispatch({type:CONFIRMED_ORDER_SUCCESS,payload:resp.data})
    } catch (error) {
        dispatch({type:CONFIRMED_ORDER_FAILURE,error:error.message})
    }
}

export const shipOrder=(orderId)=>async(dispatch)=>{
    dispatch({type:SHIP_ORDER_REQUEST});
    try {
        const resp = await api.put(`/api/admin/order/${orderId}/ship`);
        console.log("ship _ order",resp.data);
        dispatch({type:SHIP_ORDER_SUCCESS,payload:resp.data})
    } catch (error) {
        dispatch({type:SHIP_ORDER_FAILURE,error:error.message})
    }
}

export const deliveredOrder=(orderId)=>async(dispatch)=>{
    dispatch({type:DELIVERED_ORDER_REQUEST});
    try {
        const resp = await api.put(`/api/admin/order/${orderId}/delivered`);
        console.log("deliver _ order",resp.data);
        dispatch({type:DELIVERED_ORDER_SUCCESS,payload:resp.data})
    } catch (error) {
        dispatch({type:DELIVERED_ORDER_FAILURE,error:error.message})
    }
}

export const cancelOrder=(orderId)=> async(dispatch)=>{
    dispatch({type:CANCELED_ORDER_REQUEST});
    try {
        const resp = await api.put(`/api/admin/order/${orderId}/cancel`);
        console.log("cancel _ order",resp.data);
        dispatch({type:CANCELED_ORDER_SUCCESS,payload:resp.data})
    } catch (error) {
        dispatch({type:CANCELED_ORDER_FAILURE,error:error.message})
    }
}

export const deletedOrder=(orderId)=> async(dispatch)=>{
    dispatch({type:DELETE_ORDER_REQUEST});
    try {
        const resp = await api.delete(`/api/admin/order/${orderId}/deleted`);
        console.log("ddeleted _ order",resp.data);
        dispatch({type:DELETE_ORDER_SUCCESS,payload:resp.data})
    } catch (error) {
        dispatch({type:DELETE_ORDER_FAILURE,error:error.message})
    }
}