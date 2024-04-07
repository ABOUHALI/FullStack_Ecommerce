package com.ecommerce.service;

import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Rating;
import com.ecommerce.model.User;
import com.ecommerce.request.RatingRequest;

import java.util.List;

public interface RatingService {

    public Rating createRating(RatingRequest rating, User
            user) throws ProductException;

    public List<Rating> getProductsRating(Long productId);

}
