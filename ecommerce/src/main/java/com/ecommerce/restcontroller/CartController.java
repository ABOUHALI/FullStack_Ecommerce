package com.ecommerce.restcontroller;


import com.ecommerce.exception.ProductException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.Cart;
import com.ecommerce.model.CartItem;
import com.ecommerce.model.User;
import com.ecommerce.request.CartItemRequest;
import com.ecommerce.service.CartService;
import com.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    public UserService userService;
    @Autowired
    private CartService cartService;

    @GetMapping("/")
    public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization") String jwt) throws UserException {
        User user = userService.findUserProfileByJwt(jwt);
        Cart cart = cartService.findUserCart(user.getId());
        return new ResponseEntity<Cart>(cart, HttpStatus.OK);

    }

    @PutMapping("/add")
    public ResponseEntity<CartItem> addProductToCart(@RequestHeader("Authorization") String jwt, @RequestBody CartItemRequest request) throws UserException, ProductException {
        User user = userService.findUserProfileByJwt(jwt);
        CartItem item = cartService.addCartItem(user.getId(),request);
        return new ResponseEntity<>(item,HttpStatus.ACCEPTED);
    }

}
