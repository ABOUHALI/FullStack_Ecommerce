package com.ecommerce.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;



public class PaymentInformation {
	

	@Column(name = "cardholder_name")
	private String cardholderName;

	@Column(name = "card_number")
	private String cardNumber;

	@Column(name = "expirationDate")
	private LocalDate expirationDate;

	@Column(name = "cvv")
	private String cvv;

}
