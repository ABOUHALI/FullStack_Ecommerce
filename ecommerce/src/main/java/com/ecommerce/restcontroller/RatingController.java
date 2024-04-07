package com.ecommerce.restcontroller;

import com.ecommerce.exception.ProductException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.Rating;
import com.ecommerce.model.User;
import com.ecommerce.request.RatingRequest;
import com.ecommerce.service.RatingService;
import com.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/ratings"
)
public class RatingController {

    @Autowired
    private UserService userService;
    @Autowired
    private RatingService ratingService;

    @PostMapping("/create")
    public ResponseEntity<?> createRating(@RequestBody RatingRequest rating, @RequestHeader("Authorization") String jwt) throws UserException, ProductException {
        User user = userService.findUserProfileByJwt(jwt);
        Rating rating1 = ratingService.createRating(rating, user);
        return  ResponseEntity.ok(rating1);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<?> getProductsRating(@PathVariable Long productId){
        List<Rating> ratings=ratingService.getProductsRating(productId);
        return  ResponseEntity.ok(ratings);
    }


}