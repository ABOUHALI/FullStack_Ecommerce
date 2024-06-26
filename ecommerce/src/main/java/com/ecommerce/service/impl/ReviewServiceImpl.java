package com.ecommerce.service.impl;

import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Product;
import com.ecommerce.model.Review;
import com.ecommerce.model.User;
import com.ecommerce.repository.ProductRepository;
import com.ecommerce.repository.ReviewRepository;
import com.ecommerce.request.ReviewRequest;
import com.ecommerce.service.ProductService;
import com.ecommerce.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private ProductService productService;
    @Autowired
    private ProductRepository productRepository;


    @Override
    public Review createReview(ReviewRequest review, User user) throws ProductException {
        System.out.println("review"+review.toString());
        Product product=productService.findProductById(review.getProductId());
        Review r = new Review();
        r.setUser(user);
        r.setProduct(product);
        r.setReview(review.getReview());
        r.setCreatedAt(LocalDateTime.now());

        productRepository.save(product);
        return reviewRepository.save(r);
    }

    @Override
    public List<Review> getAllReviews(Long productId) {
        return reviewRepository.getAllProductsReview(productId);
    }
}
