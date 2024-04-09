package com.ecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;


@Getter
@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    @Column(name = "cart_items")
    private Set<CartItem> cartItems = new HashSet<>();

    @Column(name = "total_price")
    private double totalPrice;

    @Column(name="total_item")
    private int totalItem;

    private int totalDiscountedPrice;

    private int discount;

    public Cart() {
        // TODO Auto-generated constructor stub
    }

    public Cart(Long id, User user, Set<CartItem> cartItems, double totalPrice, int totalItem) {
        super();
        this.id = id;
        this.user = user;
        this.cartItems = cartItems;
        this.totalPrice = totalPrice;
        this.totalItem = totalItem;
    }

    public void setTotalDiscountedPrice(int totalDiscountedPrice) {
        this.totalDiscountedPrice = totalDiscountedPrice;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setCartItems(Set<CartItem> cartItems) {
        this.cartItems = cartItems;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public void setTotalItem(int totalItem) {
        this.totalItem = totalItem;
    }

}
