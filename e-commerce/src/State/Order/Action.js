import { api } from "../../config/apiConfig";
import { GET_ORDERS_REQUEST } from "../Admin/Order/ActionType";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_HISTORY_FAILURE, GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS } from "./ActionType"

export const createOrder = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
      
      console.log("createorder",reqData)
  
      const { data } = await api.post(
        `/api/orders/`,
        reqData.address
      );
      if (data.id) {
        reqData.navigate({ search: `step=3&order_id=${data.id}` });
      }
      console.log("created order - ", data);
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log("catch error : ", error);
      dispatch({
        type: CREATE_ORDER_FAILURE,
        payload:error.message
      });
    }
  };
  
  export const getOrderById = (orderId) => async (dispatch) => {
    dispatch({ type: GET_ORDER_BY_ID_REQUEST });
    try {
      
  
      const { data } = await api.get(
        `/api/orders/${orderId}`,
        
      );
      console.log("order by id ", data);
      dispatch({
        type: GET_ORDER_BY_ID_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log("catch ",error)
      dispatch({
        type: GET_ORDER_BY_ID_FAILURE,
        payload:error.message,
      });
    }
  };
  
 export const getOrderHistory=(reqData)=>async(dispatch)=>{
  try{
    dispatch({type:GET_ORDER_HISTORY_REQUEST});
    const {data}=await api.get(`/api/orders/user`);
    dispatch({type:GET_ORDER_HISTORY_SUCCESS,payload:data});
    //console.log("getorderhistory",data)
  }catch(error){
    dispatch({type:GET_ORDER_HISTORY_FAILURE,error:error.message})
  }
 }