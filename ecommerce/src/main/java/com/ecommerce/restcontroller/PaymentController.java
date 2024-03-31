package com.ecommerce.restcontroller;

import com.ecommerce.exception.OrderException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.Order;
import com.ecommerce.model.enume.PaymentStatus;
import com.ecommerce.repository.OrderRepository;
import com.ecommerce.response.PaymentResponse;
import com.ecommerce.service.OrderService;
import com.ecommerce.service.PaymentService;
import com.ecommerce.service.UserService;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PaymentController {



    @Autowired
    private OrderService orderService;
    @Autowired

    private UserService userService;
    @Autowired

    private OrderRepository orderRepository;

    @Autowired
    private PaymentService paymentService;
    @Value("${stripe.api.key}")
    private String stripeSecretKey;


    @PostMapping("/payments/{orderId}")
    public ResponseEntity<PaymentResponse> createPaymentLink(@PathVariable Long orderId,
                                                             @RequestHeader("Authorization")String jwt)
            throws StripeException, UserException, OrderException {
        System.out.println("createpaymentlink");
        Order order=orderService.findOrderById(orderId);
        PaymentResponse res = paymentService.createPaymentLink(order);

        return new ResponseEntity<PaymentResponse>(res, HttpStatus.OK);

//		order_id
    }

    @GetMapping("/payments")

    public ResponseEntity<?> redirect(@RequestParam(name="payment_link_id")String paymentId,@RequestParam(name="order_id")Long orderId) throws OrderException {
        Stripe.apiKey = stripeSecretKey; // Your Stripe Secret Key

        Order order = orderService.findOrderById(orderId);


            // Retrieve payment details from Stripe
            //PaymentIntent paymentIntent = PaymentIntent.retrieve(paymentId);

            // Check if payment is successful

                order.getPaymentDetails().setPaymentId(paymentId);
                order.getPaymentDetails().setStatus(PaymentStatus.COMPLETED);
                order.setOrderStatus("placed");
                orderRepository.save(order);


                return ResponseEntity.ok("Your order has been placed.");




}

}
