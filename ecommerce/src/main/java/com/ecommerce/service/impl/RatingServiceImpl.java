package com.ecommerce.service.impl;

import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Rating;
import com.ecommerce.model.User;
import com.ecommerce.model.Product;
import com.ecommerce.repository.RatingRepository;
import com.ecommerce.request.RatingRequest;
import com.ecommerce.service.ProductService;
import com.ecommerce.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RatingServiceImpl implements RatingService {

    @Autowired
    private RatingRepository ratingRepository;
    @Autowired
    private ProductService productService;

    @Override
    public Rating createRating(RatingRequest rating, User user) throws ProductException {
        Product product = productService.findProductById(rating.getProductId());
        Rating r =new Rating();
        r.setProduct(product);
        r.setUser(user);
        r.setRating(rating.getRating());
        r.setCreatedAt(LocalDateTime.now());
        return ratingRepository.save(r);
    }

    @Override
    public List<Rating> getProductsRating(Long productId) {
        return ratingRepository.getAllProductsRating(productId);
    }
}
