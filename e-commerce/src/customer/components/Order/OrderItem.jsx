import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { Navigate, useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const OrderItem = ({item,order}) => {
   const navigate=useNavigate();
   const isDelivered=order?.orderStatus === "delivered"
  return (
    <div onClick={()=>navigate(`/account/order/${order?.id}`)} className="p-5 shadow-md  hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={item?.product.imageUrl}
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">{item?.product.title}</p>
              <p className="opacity-50 text-xs font-semibold ">Size : {item?.size}</p>
              <p className="opacity-50 text-xs font-semibold ">Color: {item?.product.color}</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>{item?.discountedPrice} $</p>
        </Grid>

        <Grid item xs={4}>
          {isDelivered && (
            <div >
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered On April 01</span>
              </p>
                
              
            </div>
          )}
          {!isDelivered && (
            <p>
              <span>Expected Delivery on April 30</span>
            </p>
          )}
          {isDelivered && (
            <div
            onClick={()=>navigate(`/account/rate/{id}`)}
            className="flex items-center text-blue-600 cursor-pointer"
            >
              <StarIcon sx={{fontSize:"2rem"}} className="px-2 text-5xl"/>
              <span>Rate & Review Product</span>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderItem;
