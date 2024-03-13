package com.ecommerce.restcontroller;

import com.ecommerce.exception.OrderException;
import com.ecommerce.model.Order;
import com.ecommerce.service.OrderService;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/order")
public class OrderAdmController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/")
    public ResponseEntity<?> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }


    @PutMapping("/{orderId}/confirmed")
    public ResponseEntity<?> confirmedOrder(@PathVariable Long orderId) throws OrderException {
        Order order = orderService.changedStatusOrder(orderId,"confirmed");
        return ResponseEntity.ok(order);
    }

    @PutMapping("/{orderId}/ship")
    public ResponseEntity<?> shippedOrder(@PathVariable Long orderId) throws OrderException {
        Order order=orderService.changedStatusOrder(orderId,"shipped");
        return ResponseEntity.ok(order);
    }

    /***
     * delivered
     * canceled
     * deleted
     * ***/

    @PutMapping("/{orderId}/delivered")
    public ResponseEntity<?> deliveredOrder(@PathVariable Long orderId) throws OrderException {
        Order order = orderService.changedStatusOrder(orderId,"delivered");
        return ResponseEntity.ok(order);
    }

    @PutMapping("/{orderId}/cancel")
    public ResponseEntity<?> cancelledOrder(@PathVariable Long orderId) throws OrderException{
        Order order = orderService.changedStatusOrder(orderId,"cancelled");
        return ResponseEntity.ok(order);
    }

    @PutMapping("/{orderId}/deleted")
    public ResponseEntity<?> deletedOrder(@PathVariable Long orderId) throws OrderException {
        Order order = orderService.changedStatusOrder(orderId,"deleted");
        return ResponseEntity.ok(order);
    }

}


