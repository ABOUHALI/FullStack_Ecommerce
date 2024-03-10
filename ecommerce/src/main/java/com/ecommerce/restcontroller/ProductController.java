package com.ecommerce.restcontroller;


import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Product;
import com.ecommerce.request.ProductReq;
import com.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping("/")
    public ResponseEntity<Product> createProduct(@RequestBody ProductReq product) throws ProductException {
        Product newProduct = productService.createProduct(product);
        return new ResponseEntity<Product>(newProduct, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/delete/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long productId) throws ProductException {
        String deleteAlert = productService.deleteProduct(productId);

        return ResponseEntity.accepted().build();
    }

    @GetMapping("/all")
    public ResponseEntity<?> getProducts(){
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @PostMapping("/create")
    public HttpEntity<?> addProducts(@RequestBody ProductReq[] products) throws ProductException {
        for (ProductReq product: products) {
            productService.createProduct(product);
        }
        return ResponseEntity.ok(products);

    }


    @PutMapping("/update/{productId}")
    public HttpEntity<?> updateProduct(@PathVariable Long productId,@RequestBody Product product ) throws ProductException {
            Product productUpd = productService.updateProduct(productId,product);
            return ResponseEntity.ok(productUpd);

    }







}
