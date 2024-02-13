package com.ecommerce.model;

import lombok.Getter;

public class PaymentDetails {
    @Getter
    private String paymentMethod;
    private String status;
    private String paymentId;
    /*
    private String paymentLinkId;
    private String paymentLinkReferenceId;
    private String paymentLinkStatus;
    private String paymentId​;*/

    public PaymentDetails(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public PaymentDetails(String paymentMethod, String status, String paymentId) {
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }
}
