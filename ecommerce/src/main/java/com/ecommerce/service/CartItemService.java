package com.ecommerce.service;

import com.ecommerce.exception.CartItemException;

import com.ecommerce.exception.UserException;
import com.ecommerce.model.Cart;
import com.ecommerce.model.CartItem;
import com.ecommerce.model.Product;
import com.ecommerce.model.User;

public interface CartItemService {
    public CartItem createCartItem(CartItem cartItem);
    public CartItem updateCartItem(Long userId,Long id,CartItem cartItem) throws CartItemException, UserException;

    public CartItem isCartItemExist(Cart cart, Product product, String size ,Long userId);

    public void removeCartItem(Long userId,Long cartItemId) throws CartItemException,UserException;

    public CartItem findCartItemById(Long cartItemId) throws CartItemException;
}
