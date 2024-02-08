package com.ecommerce.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name = "title")
	private String title;

	@Column(name = "description")
	private String description;

	@Column(name = "price")
	private double price;

	@Column(name = "discounted_price")
	private double discountedPrice;

	@Column(name = "discount_persent")
	private double discountedPersent;

	@Column(name = "quantity")
	private int quantity;
	
	private String brand;

	private String color;

	private int numRatings;

	@Embedded
	@ElementCollection
	@Column(name = "sizes")
	private Set<Size> sizes = new HashSet<>();

	@Column(name = "image_Url")
	private String imageUrl;

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
	private List<Rating> ratings = new ArrayList<>();

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
	private List<Review> reviews = new ArrayList<>();

	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;
	
	private LocalDateTime createdAt;

}
