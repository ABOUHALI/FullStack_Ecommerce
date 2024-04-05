package com.ecommerce.restcontroller;

import com.ecommerce.exception.ProductException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.Review;
import com.ecommerce.model.User;
import com.ecommerce.request.ReviewRequest;
import com.ecommerce.service.ReviewService;
import com.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    @Autowired
    public ReviewService reviewService;
    @Autowired
    public UserService userService;


    @PostMapping("/create")
    public ResponseEntity<?> createReview(@RequestBody ReviewRequest review, @RequestHeader("Authorization")String jwt) throws UserException, ProductException {
        User user =userService.findUserProfileByJwt(jwt);
        Review rev = reviewService.createReview(review,user);
        return ResponseEntity.ok(rev);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<?> getProductsReview(@PathVariable Long productId){
           List<Review> reviewList = reviewService.getAllReviews(productId);
           return ResponseEntity.ok(reviewList);
    }
}
