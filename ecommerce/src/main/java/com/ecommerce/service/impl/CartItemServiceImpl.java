package com.ecommerce.service.impl;

import com.ecommerce.exception.CartItemException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.Cart;
import com.ecommerce.model.User;
import com.ecommerce.model.CartItem;
import com.ecommerce.model.Product;
import com.ecommerce.repository.CartItemRepository;
import com.ecommerce.repository.CartRepository;
import com.ecommerce.service.CartItemService;
import com.ecommerce.service.UserService;
import jakarta.websocket.server.ServerEndpoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CartItemServiceImpl implements CartItemService {
    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private UserService userService;



    @Override
    public CartItem createCartItem(CartItem cartItem) {
        cartItem.setQuantity(1);
        cartItem.setPrice((int) (cartItem.getProduct().getPrice()*1));
        cartItem.setDiscountedPrice((int) (cartItem.getProduct().getDiscountedPrice()*cartItem.getQuantity()));

        return cartItemRepository.save(cartItem);
    }

    @Override
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
        CartItem cartItem1 = findCartItemById(id);
        User user = userService.findUserById(cartItem1.getUserId());

        if(user.getId().equals(userId)){
            cartItem1.setQuantity(cartItem.getQuantity());
            cartItem1.setDiscountedPrice((int) (cartItem.getQuantity()*cartItem.getProduct().getDiscountedPrice()));
            cartItem1.setPrice((int) (cartItem.getPrice()*cartItem.getProduct().getPrice()));

            return cartItemRepository.save(cartItem1);
        }else {
            throw new CartItemException("Got error while updating another users cartItem");
        }

    }

    @Override
    public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {


        return cartItemRepository.isCartItemExist(cart,product,size,userId);
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {
        CartItem cartItem = findCartItemById(cartItemId);
        User userCartItem=userService.findUserById(cartItem.getUserId());

        User connectedUser = userService.findUserById(userId);
        System.out.println("realUser "+connectedUser.getId());
        System.out.println("User Cart "+userCartItem.getId());

        if(connectedUser.getId().equals(userCartItem.getId())){
            cartItemRepository.deleteById(cartItem.getId());
        }else {
            throw new UserException("error while removing cartitem of another user");
        }
    }

    @Override
    public CartItem findCartItemById(Long cartItemId) throws CartItemException {

        Optional<CartItem> optionalCartItem = cartItemRepository.findById(cartItemId);

        if(optionalCartItem.isPresent()){
            return optionalCartItem.get();
        }
        throw new CartItemException("cartItem not found with id :"+cartItemId);
    }
}
