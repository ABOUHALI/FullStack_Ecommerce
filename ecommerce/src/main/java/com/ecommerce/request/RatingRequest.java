package com.ecommerce.request;

import jakarta.persistence.Entity;
import lombok.*;

@Data

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RatingRequest {
    private Long productId;
    private double rating;
}
