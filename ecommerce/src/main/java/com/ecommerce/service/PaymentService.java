package com.ecommerce.service;

import com.ecommerce.model.Order;
import com.ecommerce.response.PaymentResponse;
import com.stripe.exception.StripeException;
import org.springframework.stereotype.Service;

public interface PaymentService {
    public PaymentResponse createPaymentLink(Order order) throws StripeException;
}
