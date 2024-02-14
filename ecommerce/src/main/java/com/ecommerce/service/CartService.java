package com.ecommerce.service;

import com.ecommerce.model.Cart;
import com.ecommerce.model.User;
import com.ecommerce.request.CartItemRequest;

public interface CartService {

    public Cart createCart(User user);
    public String addCartItem(Long userId, CartItemRequest cartItemRequest);

    public Cart findUserCart(Long userId);
}
