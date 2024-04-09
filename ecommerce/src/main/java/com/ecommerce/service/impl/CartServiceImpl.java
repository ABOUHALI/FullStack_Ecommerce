package com.ecommerce.service.impl;

import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Cart;
import com.ecommerce.model.CartItem;
import com.ecommerce.model.Product;
import com.ecommerce.model.User;
import com.ecommerce.repository.CartRepository;
import com.ecommerce.request.CartItemRequest;
import com.ecommerce.service.CartItemService;
import com.ecommerce.service.CartService;
import com.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ProductService productService;
    @Autowired
    private CartItemService cartItemService;

    @Override
    public Cart createCart(User user) {

        Cart cart = new Cart();
        cart.setUser(user);
        return cartRepository.save(cart);
    }

    @Override
    public CartItem addCartItem(Long userId, CartItemRequest cartItemRequest) throws ProductException {
        Cart cart = cartRepository.findCartByUserId(userId);
        //System.out.println(cart.toString());
        Product product = productService.findProductById(cartItemRequest.getProductId());
        CartItem cartItem = cartItemService.isCartItemExist(cart,product,cartItemRequest.getSize(),userId);

        if(cartItem== null){

            CartItem cartItem1 = new CartItem();
            cartItem1.setProduct(product);
            cartItem1.setCart(cart);
            cartItem1.setUserId(userId);
            cartItem1.setQuantity(cartItemRequest.getQuantity());
            cartItem1.setPrice((int) (cartItemRequest.getQuantity()*product.getDiscountedPrice()));
            cartItem1.setSize(cartItemRequest.getSize());

            CartItem newCartItem = cartItemService.createCartItem(cartItem1);

            cart.getCartItems().add(cartItem1);
            return newCartItem;

        }



        return cartItem;
    }

    @Override
    public Cart findUserCart(Long userId) {
        //System.out.println("findUser"+userId);
        Cart cart = cartRepository.findCartByUserId(userId);
        if (cart == null) {

            return null;
        }
        //calculating total price and total item and total discounted price
        int finalPrice =0;
        int finalDiscountedPrice=0;
        int finalItemnbr=0;
        if(cart.getCartItems()!=null) {
            for (CartItem ci : cart.getCartItems()) {
                finalPrice += ci.getPrice();
                finalDiscountedPrice += ci.getDiscountedPrice();
                finalItemnbr += ci.getQuantity();
            }
        }
        cart.setTotalItem(finalItemnbr);
        cart.setTotalPrice(finalPrice);
        cart.setTotalDiscountedPrice(finalDiscountedPrice);
        cart.setDiscount(finalPrice-finalDiscountedPrice);

        return cartRepository.save(cart);
    }
}
