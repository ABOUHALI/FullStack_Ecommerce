package com.ecommerce.service.impl;

import com.ecommerce.model.Order;
import com.ecommerce.model.enume.PaymentStatus;
import com.ecommerce.repository.OrderRepository;
import com.ecommerce.response.PaymentResponse;
import com.ecommerce.service.PaymentService;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Value("${stripe.api.key}")
    private String stripeSecretKey;

    @Autowired
    private OrderRepository orderRepository;


    /*@Override
    public PaymentResponse createPaymentLink(Order order) throws StripeException {
        Stripe.apiKey=stripeSecretKey;
        SessionCreateParams params = SessionCreateParams.builder()
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:3000/payment/success/" + order.getId())  // Corrected closing parenthesis
                .setCancelUrl("http://localhost:3000/payment/fail")
                .addLineItem(SessionCreateParams.LineItem.builder()
                        .setQuantity(1L)
                        .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency("usd")
                                .setUnitAmount((long) order.getTotalDiscountedPrice()*100)
                                .setProductData(SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                        .setName("ecommerceAYMAN")
                                        .build()
                                )
                                .build()
                        )
                        .build()
                ).build();

        //create the customer projecct
        SessionCreateParams.CustomerUpdate customerCreateParams=SessionCreateParams.CustomerUpdate.builder()
                .setName(SessionCreateParams.CustomerUpdate.Name.valueOf(order.getUser().getFirstName()+""+order.getUser().getLastName()))
                .build();

        Session session=Session.create(params);
        PaymentResponse res =new PaymentResponse();
        res.setPayment_url(session.getUrl());

        return res;
    }*/

    @Override
    public PaymentResponse createPaymentLink(Order order) throws StripeException {
        Stripe.apiKey = stripeSecretKey;

        // Create a list of line items for the payment session
        List<SessionCreateParams.LineItem> lineItems = new ArrayList<>();
        lineItems.add(
                SessionCreateParams.LineItem.builder()
                        .setQuantity(1L)
                        .setPriceData(
                                SessionCreateParams.LineItem.PriceData.builder()
                                        .setCurrency("usd")
                                        .setUnitAmount((long) order.getTotalDiscountedPrice() * 100) // Convert to cents
                                        .setProductData(
                                                SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                                        .setName("ecommerceAYMAN")
                                                        .build()
                                        )
                                        .build()
                        )
                        .build()
        );

        // Set customer details as metadata
        Map<String, Object> metadata = new HashMap<>();
        metadata.put("name", order.getUser().getFirstName() + " " + order.getUser().getLastName());
        metadata.put("email", order.getUser().getEmail());
        metadata.put("phone", order.getUser().getMobile());

        // Create the payment session parameters
        SessionCreateParams params = SessionCreateParams.builder()
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:3000/payment/success/" + order.getId())
                .setCancelUrl("http://localhost:3000/payment/fail")
                .addAllLineItem(lineItems)
                .putMetadata("customer_details", metadata.toString()) // Add customer details as metadata
                .build();

        // Create the payment session with Stripe
        Session session = Session.create(params);
        System.out.println("create "+session.getId());
        // Set the payment URL in the response
        PaymentResponse res = new PaymentResponse();
        res.setPayment_url(session.getUrl());
        res.setPayment_link_id(session.getId());

        System.out.println("hh"+res.toString());

        return res;
    }


}
