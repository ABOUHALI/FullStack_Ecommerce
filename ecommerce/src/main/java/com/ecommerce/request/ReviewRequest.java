package com.ecommerce.request;

import lombok.*;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Getter
@Setter
public class ReviewRequest {
    private Long productId;
    private String review;
}
