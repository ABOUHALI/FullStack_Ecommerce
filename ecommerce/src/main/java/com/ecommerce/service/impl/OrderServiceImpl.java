package com.ecommerce.service.impl;

import com.ecommerce.exception.OrderException;
import com.ecommerce.model.*;
import com.ecommerce.model.enume.PaymentStatus;
import com.ecommerce.repository.AddressRepository;
import com.ecommerce.repository.OrderItemRepository;
import com.ecommerce.repository.OrderRepository;
import com.ecommerce.repository.UserRepository;
import com.ecommerce.service.CartService;
import com.ecommerce.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    public OrderRepository orderRepository;
    @Autowired
    public AddressRepository addressRepository;
    @Autowired
    public UserRepository userRepository;
    @Autowired
    private CartService cartService;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Override
    public Order createOrder(User user, Address shippingAddress) {
            shippingAddress.setUser(user);
            Address address= addressRepository.save(shippingAddress);
            user.getAddresses().add(address);
            userRepository.save(user);

            //Cart cartuser = new Cart();
            //from cart to order
            //the same attributes

             Cart cart = cartService.findUserCart(user.getId());
             Order order = new Order();
             List<OrderItem> orderItems = new ArrayList<>();
            //saving orderitem from cartitem (from the cart from the user) and then the order
            for (CartItem item:cart.getCartItems()) {
                OrderItem orderItem = new OrderItem();
                orderItem.setPrice(item.getPrice());
                orderItem.setProduct(item.getProduct());
                orderItem.setQuantity(item.getQuantity());
                orderItem.setSize(item.getSize());
                orderItem.setUserId(item.getUserId());
                orderItem.setDiscountedPrice(item.getDiscountedPrice());

                OrderItem newOrderItem = orderItemRepository.save(orderItem);
                orderItems.add(newOrderItem);
            }
            order.setUser(user);
            order.setOrderItems(orderItems);
            order.setTotalPrice(cart.getTotalPrice());
            order.setShippingAddress(address);
            order.setTotalDiscountedPrice(cart.getTotalDiscountedPrice());
            order.setDiscount(cart.getDiscount());
            order.setTotalItem(cart.getTotalItem());
            order.setOrderDate(LocalDateTime.now());
            order.setCreatedAt(LocalDateTime.now());
            order.setOrderStatus("Pending");
            order.getPaymentDetails().setStatus(PaymentStatus.PENDING);

            Order savedOrder =orderRepository.save(order);
        for (OrderItem orderItem: orderItems) {
            orderItem.setOrder(savedOrder);
            orderItemRepository.save(orderItem);
        }

            return savedOrder;
    }

    @Override
    public Order findOrderById(Long orderId) throws OrderException {
            Optional<Order> order = orderRepository.findById(orderId);
            if(order.isPresent()){
                return order.get();
            }

            throw new OrderException("Order with id "+orderId+" doesnt exist");
    }

    @Override
    public List<Order> findOrdersHistoryByUser(User user) {
        List<Order> orders = orderRepository.getUsersOrders(user.getId());


        return orders;
    }

    @Override
    public Order changedStatusOrder(Long orderId, String newStatus) throws OrderException {
        Order order = findOrderById(orderId);
        if(newStatus.equals("placed")){
            order.getPaymentDetails().setStatus(PaymentStatus.COMPLETED);
        }
        order.setOrderStatus(newStatus);
        return order;
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAllByOrderByCreatedAtDesc();
    }

    @Override
    public void deleteOrder(Long orderId) throws OrderException {
        Optional<Order> ord = Optional.ofNullable(findOrderById(orderId));
        if(ord.isPresent()){
        orderRepository.deleteById(orderId);
    }
        throw new OrderException("error while deleting the order with "+orderId);
    }
}
