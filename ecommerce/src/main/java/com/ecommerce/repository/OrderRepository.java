package com.ecommerce.repository;

import com.ecommerce.model.Order;
import jdk.jfr.Registered;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {

        @Query("SELECT o from  Order o where o.user.id = :userId and ( o.orderStatus = 'placed' or o.orderStatus = 'confirmed' or o.orderStatus='shipped' or o.orderStatus='delivered')")
        public List<Order> getUsersOrders(@Param("userId") Long userId);

        public  List<Order> findAllByOrderByCreatedAtDesc();

}
