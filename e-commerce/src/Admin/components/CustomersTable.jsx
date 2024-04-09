import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { store } from "../../State/store";
import { getCustomers } from "../../State/Admin/Customer/Action";
import { deepPurple } from "@mui/material/colors";

const CustomersTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { adminCustomers } = useSelector((store) => store);
  console.log("customers", adminCustomers);
  useEffect(() => {
    dispatch(getCustomers());
  }, []);
  return (
    <div className="p-10">
      <Card className="mt-2 bg-gray">
        <CardHeader title="All Customers" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>

                <TableCell align="left">Adress</TableCell>
              </TableRow>
            </TableHead>
            {
              <TableBody>
                {adminCustomers?.customers?.map((item, index) => (
                  <TableRow
                    key={item.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="" className="border">
                      <Avatar
                        className="text-white"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        // onClick={handleUserClick}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {item.firstName[0].toUpperCase() +
                          "" +
                          item.lastName[0].toUpperCase()}
                      </Avatar>
                    </TableCell>
                    <TableCell align="left" scope="row">
                      {item.firstName + " " + item.lastName}
                    </TableCell>{" "}
                    <TableCell align="left">{item.email}</TableCell>
                    <TableCell align="left">{item.addresses[0]?.streetAddress +" "+item.addresses[0]?.city}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            }
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default CustomersTable;
