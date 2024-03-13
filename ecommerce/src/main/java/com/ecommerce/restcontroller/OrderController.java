package com.ecommerce.restcontroller;

import com.ecommerce.exception.OrderException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.Address;
import com.ecommerce.model.Order;
import com.ecommerce.model.User;
import com.ecommerce.service.OrderService;
import com.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private UserService userService;

    @PostMapping("/")
    public ResponseEntity<?> createOrder(@RequestBody Address shippingAddress, @RequestHeader("Authorization") String jwt) throws UserException {
        User user=userService.findUserProfileByJwt(jwt);
        Order order = orderService.createOrder(user,shippingAddress);
        return ResponseEntity.ok(order);
    }

    @GetMapping("/user")
    public ResponseEntity<?> getUserOrders(@RequestHeader("Authorization")String jwt) throws UserException {
        User user=userService.findUserProfileByJwt(jwt);
        List<Order> orders=orderService.findOrdersHistoryByUser(user);
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<?> findOrderById(@PathVariable Long orderId ,@RequestHeader("Authorization") String jwt) throws UserException, OrderException {
        User user=userService.findUserProfileByJwt(jwt);
        Order order=orderService.findOrderById(orderId);
        return ResponseEntity.ok(order);
    }

}
