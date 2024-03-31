import { GET_CUSTOMERS_FAILURE, GET_CUSTOMERS_REQUEST, GET_CUSTOMERS_SUCCESS } from "./ActionType";

const initialState={
    loading:false,
    customers:[],
    error:""
};

export const adminCustomerReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_CUSTOMERS_REQUEST:
            return {
                ...state,
                loading:true,
            };
        case GET_CUSTOMERS_SUCCESS:
            return {
                loading:false,
                customers:action.payload,
                error:""
            };
        case GET_CUSTOMERS_FAILURE:
            return {
                loading:false,
                customers:[],
                error:action.payload,
            };
        default:
            return state;
        }
    };

export default adminCustomerReducer;