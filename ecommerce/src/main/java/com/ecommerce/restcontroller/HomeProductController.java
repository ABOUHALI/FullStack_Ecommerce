package com.ecommerce.restcontroller;


import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Product;
import com.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/home/products")
public class HomeProductController {

    @Autowired
    public ProductService productService;

    @GetMapping("")
    public ResponseEntity<Page<Product>> filterProducts(@RequestParam String category,
       @RequestParam List<String> colors , @RequestParam List<String> size,@RequestParam Integer minPrice,@RequestParam Integer maxPrice ,
       @RequestParam Integer minDiscount,@RequestParam String sort,@RequestParam String stock,@RequestParam Integer pageNumber,@RequestParam Integer pageSize){
        Page<Product> filterProducts = productService.getAllProduct(category,colors,size,minPrice,maxPrice,minDiscount,sort,stock,pageNumber,pageSize);
        return new ResponseEntity<>(filterProducts, HttpStatus.ACCEPTED);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<?> getProductById(@PathVariable Long productId) throws ProductException {
        Product product = productService.findProductById(productId);
        return ResponseEntity.ok(product);
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchProduct(@RequestParam String query){
        List<Product> products = productService.searchProduct(query);
        return ResponseEntity.ok(products);
    }
}
