import { Box, Grid, Avatar, Rating } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createReview } from "../../../State/Review/Action";

const ProductReviewCard = ({ item }) => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(4.5);
  const dispatch = useDispatch();
  /*useEffect(() => {
    dispatch(createReview(value));
  }, [value]);*/
  const hasRated=item.review!== null && item.review !== undefined;
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              alt=""
              src=""
            >
              {item.user.firstName[0].toUpperCase()}
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg"> {item.user.firstName}</p>
              <p className="opacity-70">{item.createdAt}</p>
            </div>
          </div>
           
          <Rating
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            value={4.5}
            name="half-ratings"
            precision={0.5}
          />
          <p>{item.review}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
