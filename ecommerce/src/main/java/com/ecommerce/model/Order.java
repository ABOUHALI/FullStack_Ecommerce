package com.ecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "order_id")
    private String orderId;


    private  LocalDateTime orderDate;

    private LocalDateTime deliveryDate;

    private double totalPrice;

    private Integer totalDiscountedPrice;

    private Integer discount;

    private String orderStatus;
    /**
     * PENDING;
     * PLACED;
     * CONFIRMED
     * SHIPPED;
     * DELIVERED;
     * CANCELLED
     * */


    private int totalItem;

    private LocalDateTime createdAt;

    @ManyToOne
    private User user;


    @OneToMany(mappedBy = "order",cascade = CascadeType.ALL)
    private List<OrderItem> orderItems = new ArrayList<>();

    @OneToOne
    private  Address shippingAddress;

    @Embedded
    private PaymentDetails paymentDetails = new PaymentDetails();
}
