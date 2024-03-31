import { api } from "../../../config/apiConfig"
import { GET_CUSTOMERS_FAILURE, GET_CUSTOMERS_REQUEST, GET_CUSTOMERS_SUCCESS } from "./ActionType"

export const getCustomers=()=>{
    return async(dispatch)=>{
        dispatch({type:GET_CUSTOMERS_REQUEST})
        try{
            const response=await api.get(`/api/admin/users`);
            dispatch({type:GET_CUSTOMERS_SUCCESS,payload:response.data});

        }catch(error){
            dispatch({type:GET_CUSTOMERS_FAILURE,payload:error})
        }
    };
};