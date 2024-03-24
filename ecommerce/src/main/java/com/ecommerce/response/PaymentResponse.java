package com.ecommerce.response;

import lombok.Data;

@Data
public class PaymentResponse {
    private String payment_url;
    private String payment_link_id;


}
