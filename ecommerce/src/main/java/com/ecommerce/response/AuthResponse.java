package com.ecommerce.response;

import lombok.Getter;
import lombok.Setter;

public class AuthResponse {
	private String jwt;
	private String message;
	@Getter
	@Setter
	private boolean status ;

	public AuthResponse(String jwt ,boolean status) {
		this.jwt=jwt;
		this.status = status;
	}



	public String getJwt() {
		return jwt;
	}
	public void setJwt(String jwt) {
		this.jwt = jwt;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public AuthResponse(String jwt, String message) {
		super();
		this.jwt = jwt;
		this.message = message;
	}
	public AuthResponse() {
	}
}
