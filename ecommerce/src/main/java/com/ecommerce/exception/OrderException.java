package com.ecommerce.exception;

public class OrderException extends Exception {

    private String msg ;

    public OrderException(String msg){
        super(msg);
    }

}
