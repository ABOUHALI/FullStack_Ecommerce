package com.ecommerce.service;

import com.ecommerce.exception.OrderException;
import com.ecommerce.model.Address;
import com.ecommerce.model.Order;
import com.ecommerce.model.User;
import java.util.List;

public interface OrderService {

    public Order createOrder(User user , Address shippingAdress);

    public Order findOrderById(Long orderId) throws OrderException;

    public List<Order> findOrdersHistoryByUser(User user);

    public Order changedStatusOrder(Long orderId,String newStatus) throws OrderException;

    public List<Order> getAllOrders();

    public void deleteOrder(Long orderId) throws Exception;

}
