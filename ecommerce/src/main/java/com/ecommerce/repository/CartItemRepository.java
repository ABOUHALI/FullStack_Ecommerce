package com.ecommerce.repository;

import com.ecommerce.model.Cart;
import com.ecommerce.model.CartItem;
import com.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    @Query("select cartItem from CartItem  cartItem where cartItem.cart=:cart and cartItem.product=:product and cartItem.size=:size and cartItem.userId=:userId")
   public  CartItem isCartItemExist(@Param("cart") Cart cart,@Param("product") Product product,@Param("size") String size,@Param("userId") Long userId);
}
