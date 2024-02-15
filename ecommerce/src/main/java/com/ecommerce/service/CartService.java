package com.ecommerce.service;

import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Cart;
import com.ecommerce.model.CartItem;
import com.ecommerce.model.User;
import com.ecommerce.request.CartItemRequest;

public interface CartService {

    public Cart createCart(User user);
    public CartItem addCartItem(Long userId, CartItemRequest cartItemRequest) throws ProductException;

    public Cart findUserCart(Long userId);
}
