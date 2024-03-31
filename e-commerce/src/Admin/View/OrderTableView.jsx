import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmOrder, deletedOrder, deliveredOrder, getOrders, shipOrder } from "../../State/Admin/Order/Action";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CONFIRMED_ORDER_FAILURE } from "../../State/Admin/Order/ActionType";

const OrderTableView = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);
  const [anchorEl, setAnchorEl] = useState([]);
  const open = Boolean(anchorEl);
  
  const handleClose = (index) => {
    const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=null;
    setAnchorEl(newAnchorElArray);
  };
  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed,adminOrder.shipped,adminOrder.delivered,adminOrder.deleted]);

  const handleClick = (event,index) => {
    const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=event.currentTarget;
    setAnchorEl(newAnchorElArray);
   };

  const handleShippedOrder=(orderId,index)=>{
    dispatch(shipOrder(orderId))
    handleClose(index)
  }
  const handleConfirmedOrder=(orderId,index)=>{
    console.log("confirmed orderstable")
    dispatch(confirmOrder(orderId))
    handleClose(index)
  }
  const handleDeliveredOrder=(orderId,index)=>{
    dispatch(deliveredOrder(orderId))
    handleClose(index)
  }

  const handleDeletedOrder=(orderId,index)=>{
    dispatch(deletedOrder(orderId))
  }
  return (
    <div className="p-10">
      <Card className="mt-2 bg-gray">
        <CardHeader title="Recent Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
       
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.slice(0,5).map((item, index) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="" className="border">
                    <AvatarGroup max={4} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) => (
                        <Avatar src={orderItem.product.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {item.orderItems.map((orderItem) => (
                      <p>{orderItem.product.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left"><span className={`text-white px-5 py-2 rounded-full
                    ${item.orderStatus==="confirmed"?"bg-[#45CE30]":
                    item.orderStatus==="shipped"?"bg-[#0A79DF]":
                    item.orderStatus==="placed"?"bg-[#53E0BC]":
                    item.orderStatus==="pending"?"bg-[gray]":
                    "bg-[#E8290B]"}`}>{item.orderStatus}</span></TableCell>

                  
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrderTableView;
