package com.ecommerce.model;

import com.ecommerce.model.enume.PaymentStatus;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentDetails {

    private String paymentMethod;
    private PaymentStatus status;
    private String paymentId;


    public PaymentDetails(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public PaymentDetails(String paymentMethod, PaymentStatus status, String paymentId) {
        this.paymentMethod = paymentMethod;
        this.status = status;
        this.paymentId = paymentId;
    }

    public PaymentDetails() {
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

    public PaymentStatus getStatus() {
        return status;
    }
    public void setStatus(PaymentStatus status) {
        this.status = status;
    }

}
