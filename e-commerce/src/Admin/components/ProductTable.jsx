import {
  Avatar,
  Button,
  Card,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { useLocation, useNavigate } from "react-router-dom";

const ProductTable = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const availability = searchParams.get("availability");
  const page=searchParams.get("page");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  const [filterValue, setFilterValue] = useState({
    availability: "",
    category: "",
    sort: "",
  });
  //console.log(products)
  useEffect(() => {
    const data = {
      category: category || "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 99999999,
      minDiscount: 0,
      sort: sort || "price_low",
      pageNumber: page||0,
      pageSize: 5,
      stock: availability,
    };
    dispatch(findProducts(data));
  }, [category, products.deletedProduct, availability, sort,page]);


  const handlePaginationChange=(event,value)=>{
    searchParams.set("page",value-1);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  }

  const handleFilterChange = (e, sectionId) => {
    console.log(e.target.value, sectionId);

    setFilterValue((values) => ({ ...values, [sectionId]: e.target.value }));
    searchParams.set(sectionId, e.target.value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  const handleDeleteProduct = (productId) => {
    console.log("delete product ", productId);
    dispatch(deleteProduct(productId));
  };
  return (
    <div className="p-5">
      <Card className="p-3">
        <CardHeader
          title="Sort"
          sx={{
            pt: 0,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue.category}
                label="Category"
                onChange={(e) => handleFilterChange(e, "category")}
              >
                <MenuItem value={"mens_tshirt"}>Men's T-shirt</MenuItem>
                <MenuItem value={"mens_hoodies"}>Men's Hoodies</MenuItem>
                <MenuItem value={"mens_jeans"}>Jeans</MenuItem>
                <MenuItem value={"schuhe"}>schuhe</MenuItem>
                
              </Select>
            </FormControl>
          </Grid> 
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Availability</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterValue.availability}
              label="Availability"
              onChange={(e) => handleFilterChange(e, "availability")}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"in_stock"}>Instock</MenuItem>
              <MenuItem value={"out_of_stock"}>Out of Stock</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort By Price</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterValue.sort}
              label="Sort By Price"
              onChange={(e) => handleFilterChange(e, "sort")}
            >
              <MenuItem value={"price_high"}>From High to Low</MenuItem>
              <MenuItem value={"price_low"}>From Low to High</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Card>

      <Card className="mt-2 bg-gray">
        <CardHeader title="All Products" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>

                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.products?.content?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="left">{item.category.name}</TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => handleDeleteProduct(item.id)}
                      variant="outlined"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Card className="mt-2 border">
        <div className="mx-auto px-4 py-5 flex justify-center shadow-lg rounded-md">
          <Pagination
            count={products.products?.totalPages}
            color="primary"
            className=""
            onChange={handlePaginationChange}
            // value={page}
          />
        </div>
      </Card>
    </div>
  );
};

export default ProductTable;
