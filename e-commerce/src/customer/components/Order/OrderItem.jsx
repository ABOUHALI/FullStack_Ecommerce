import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { Navigate, useNavigate } from "react-router-dom";
const OrderItem = () => {
   const navigate=useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-md  hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/369268835_261414970059763_5162732945984876260_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=GYLFSusfXO0AX8MdFUz&_nc_oc=AQm-0x9xOz2VD8EhNxzxSVk-OpPH_qnbmta1XoH-dzP2XTDnvegW-ja_Camt8zN73vk&_nc_ht=scontent-dus1-1.xx&oh=00_AfAPBOFasrQEsoBQ2elaceSb55H4FJYoVgUSZ24GZNe-uA&oe=65E36F2F"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">CODM Home Shirt 23/24</p>
              <p className="opacity-50 text-xs font-semibold ">Size : M</p>
              <p className="opacity-50 text-xs font-semibold ">Color: White</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>21 $</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div >
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered On March 10</span>
              </p>
                <p className="text-xs">Your Item Has Been Delivered</p>
              
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on March 10</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderItem;
