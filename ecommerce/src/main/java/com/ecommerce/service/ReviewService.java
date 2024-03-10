package com.ecommerce.service;

import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Review;
import com.ecommerce.model.User;

import java.util.List;

public interface ReviewService {

    public Review createReview(Review review, User user) throws ProductException;
    public List<Review> getAllReviews(Long productId);
}
