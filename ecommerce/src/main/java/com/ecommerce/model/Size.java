package com.ecommerce.model;


public class Size {
	
	private String name;
	private int quantity;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public Size(String name, int quantity) {
		super();
		this.name = name;
		this.quantity = quantity;
	}
	 public Size() {
		// TODO Auto-generated constructor stub
	}
}
