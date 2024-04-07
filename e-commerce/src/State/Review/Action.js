import { api } from "../../config/apiConfig"
import { CREATE_RATING_FAILURE, CREATE_RATING_SUCCESS, CREATE_REVIEW_FAILURE, CREATE_REVIEW_REQUEST, CREATE_REVIEW_SUCCESS, GET_ALL_RATINGS_FAILURE, GET_ALL_RATINGS_SUCCESS, GET_ALL_REVIEWS_FAILURE, GET_ALL_REVIEWS_SUCCESS } from "./ActionType";

export const createReview=(reqData)=>{
    return async(dispatch)=>{
        dispatch({type:CREATE_REVIEW_REQUEST})
        try{const response = await api.post('/api/reviews/create',reqData);
        dispatch({type:CREATE_REVIEW_SUCCESS,payload:response.data});
        }catch(error){
            dispatch({
                type:CREATE_REVIEW_FAILURE,
                payload:error.message
            });
        }
        
    };
};

export const getProductReviews=(productId)=>{
    return async(dispatch)=>{
        try{
            const response = await api.get(`/api/reviews/product/${productId}`);
            console.log("response",response.data)
            dispatch({type:GET_ALL_REVIEWS_SUCCESS,payload:response.data})
        }catch(error){
            dispatch({type:GET_ALL_REVIEWS_FAILURE,error:error.message})
        }
    };
};

export const createRating=(reqData)=>{
    return async(dispatch)=>{
        try{            console.log(reqData);

            const resp = await api.post('api/ratings/create',reqData);
            dispatch({type:CREATE_RATING_SUCCESS,payload:resp.data});
            console.log("createRating",resp.data)

        }catch(error){
            dispatch({type:CREATE_RATING_FAILURE,payload:error.message});
        }
    }
};

export const getProductRatings=(productId)=>{
    return async(dispatch)=>{
        try{
            const response = await api.get(`/api/ratings/product/${productId}`);
            console.log("response",response.data)
            dispatch({type:GET_ALL_RATINGS_SUCCESS,payload:response.data})
        }catch(error){
            dispatch({type:GET_ALL_RATINGS_FAILURE,error:error.message})
        }
    };
};