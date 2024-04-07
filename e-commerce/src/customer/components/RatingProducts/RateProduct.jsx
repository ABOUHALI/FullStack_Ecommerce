import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { findProductById } from '../../../State/Product/Action';
import {Grid,Rating,Typography,TextField,Button} from "@mui/material";
import { createRating, createReview, getProductRatings } from '../../../State/Review/Action';
import { Description } from '@mui/icons-material';
const RateProduct = () => {
  //const [formData,setFormData]=useState({title:"",description:""});
  const [rating,setRating]=useState(0);
  const {products}=useSelector((store)=>store)
  const {productId}=useParams();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  //console.log("productsId",productId)

  const handleRateProduct=(e,value)=>{
    setRating(value);
    console.log(value);
    return async (dispatch)=>{
      try{
          const reqData={rating:value,productId:productId};
          console.log(reqData)
          await dispatch(createRating(reqData));
          await dispatch(getProductRatings(productId));
      }catch(error){
          console.log(error)
      }
    }
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const rating ={
       title:data.get("title"),
       description:data.get("description")
    }
    dispatch(createReview({review:rating.title,productId}))
    navigate(`/product/${productId}`)

  }

  /*const handleChange=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
      setFormData((prev)=>({...prev,[name]:value}));
      console.log(formData)
  }*/

  useEffect(()=>{
    console.log(rating,productId);

    dispatch(findProductById({productId}))
    //dispatch(createRating({rating:rating,productId:productId}));

  },[])

  

  return (
    <div className='px-5 lg:px-20'>
      <h1 className='text-xl p-5 shadow-lg mb-8 font-bold'>
        Rate & Review Product
      </h1>
      <Grid sx={{justifyContent:"space-between"}} container>
        <Grid item className='flex lg:items-center shadow-lg border rounded-md p-5'
              xs={12}
              lg={5.8}
        >
          <div>
              <img className='w-[5rem] lg:w-[15rem]'
                  src={products.product?.imageUrl}
                  alt=""
              />
          </div>
          <div className="ml-3 lg:ml-5 space-y-2 lg:space-y-4">
            <p className="lg:text-lg">{products.product?.title}</p>
            <p className="opacity-50 font-semibold">
              {products.product?.brand}
            </p>
            <p>$ {products.product?.price}</p>
            <p>Size: Free</p>
           {products.product?.color && <p>Color: {products.product?.color}</p>}
            <div className="flex items-center space-x-3">
              <Rating name="read-only" value={4.6} precision={0.5} readOnly />
              

              <p className="opacity-60 text-sm">42807 Ratings</p>
              <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                {3789} reviews
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
            <div className={"space-y-5"}>
                <div className='shadow-md border rounded-md p-5'>
                    <Typography className='font-semibold' component="legend">
                      Rate Product
                    </Typography>
                    <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event,newValue)=>{
                      handleRateProduct(event,newValue);
                    }}
                    />
                </div>
                <form
                  onSubmit={handleSubmit}
                  className='space-y-5 p-5 shadow-md border rounded-md'
                >
                  <TextField
                    label="title"
                    variant='outlined'
                    fullWidth
                    name="title"
                  />
                  <TextField
                    label="description"
                    variant='outlined'
                    fullWidth
                    name="description"
                  />
                  <Button type="submit" variant="contained" color="primary">
                        Submit Review
                  </Button>
                </form>
            </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default RateProduct