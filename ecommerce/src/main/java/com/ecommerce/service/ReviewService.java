package com.ecommerce.service;

import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Review;
import com.ecommerce.model.User;
import com.ecommerce.request.ReviewRequest;

import java.util.List;

public interface ReviewService {

    public Review createReview(ReviewRequest review, User user) throws ProductException;
    public List<Review> getAllReviews(Long productId);
}
