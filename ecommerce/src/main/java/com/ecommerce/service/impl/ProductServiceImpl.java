package com.ecommerce.service.impl;

import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Category;
import com.ecommerce.model.Product;
import com.ecommerce.repository.CategoryRepository;
import com.ecommerce.repository.ProductRepository;
import com.ecommerce.request.ProductReq;
import com.ecommerce.service.ProductService;
import com.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public Product createProduct(ProductReq productreq) throws ProductException {
        Category toplevel = categoryRepository.findByName(productreq.getTopLevelCategory());
        if(toplevel==null) {
            Category topLevelCategory= new Category();
            topLevelCategory.setName(productreq.getTopLevelCategory());
            topLevelCategory.setLevel(1);

            toplevel=categoryRepository.save(topLevelCategory);
        }
        Category secondLevel=categoryRepository.
                findbyNameAndParent(productreq.getSecondLevelCategory(),toplevel.getName());
        if(secondLevel==null) {

            Category secondLavelCategory=new Category();
            secondLavelCategory.setName(productreq.getSecondLevelCategory());
            secondLavelCategory.setParentCategory(toplevel);
            secondLavelCategory.setLevel(2);

            secondLevel= categoryRepository.save(secondLavelCategory);
        }

        Category thirdLevel=categoryRepository.findbyNameAndParent(productreq.getThirdLevelCategory(),secondLevel.getName());
        if(thirdLevel==null) {

            Category thirdLavelCategory=new Category();
            thirdLavelCategory.setName(productreq.getThirdLevelCategory());
            thirdLavelCategory.setParentCategory(secondLevel);
            thirdLavelCategory.setLevel(3);

            thirdLevel=categoryRepository.save(thirdLavelCategory);
        }
        Product product=new Product();
        product.setTitle(productreq.getTitle());
        product.setColor(productreq.getColor());
        product.setDescription(productreq.getDescription());
        product.setDiscountedPrice(productreq.getDiscountedPrice());
        product.setDiscountedPersent(productreq.getDiscountPersent());
        product.setImageUrl(productreq.getImageUrl());
        product.setBrand(productreq.getBrand());
        product.setPrice(productreq.getPrice());
        product.setSizes(productreq.getSize());
        product.setQuantity(productreq.getQuantity());
        product.setCategory(thirdLevel);
        product.setCreatedAt(LocalDateTime.now());


        return productRepository.save(product);
    }

    @Override
    public String deleteProduct(Long productId) throws ProductException {
        Product product=findProductById(productId);
        product.getSizes().clear();
        productRepository.delete(product);

        return "product"+productId+"deleted";
    }

    @Override
    public Product updateProduct(Long productId, Product productReq) throws ProductException {
        Product product=findProductById(productId);
        if(productReq.getQuantity()!=0){
            product.setQuantity(productReq.getQuantity());
        }
        if(productReq.getDescription()!=null){
            product.setDescription(productReq.getDescription());
        }

        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product findProductById(Long id) throws ProductException {
        Optional<Product> opt=productRepository.findById(id);
        return opt.orElse(null);

    }

    @Override
    public List<Product> findProductByCategory(String category) {
        return productRepository.findProductsByCategory(categoryRepository.findByName(category));
    }

    @Override
    public List<Product> searchProduct(String query) {
        return null;
    }

    @Override
    public Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {

        Pageable pageable= PageRequest.of(pageNumber,pageSize);
        List<Product> products= productRepository.filterProducts(
                category,minPrice,maxPrice,minDiscount,sort);
        if(!colors.isEmpty()){
            products=products.stream()
                    .filter(product -> colors.stream().anyMatch(color->color.equalsIgnoreCase(product.getColor())))
                    .collect(Collectors.toList());
        }

        if (stock!=null && stock.equals("in_stock")){
            products=products.stream()
                    .filter(product -> product.getQuantity()>0).collect(Collectors.toList());
        }

        int startIndex= (int) pageable.getOffset();
        int endIndex =Math.min(startIndex+pageable.getPageSize(),products.size());

        List<Product> pageContent = products.subList(startIndex,endIndex);

        return new PageImpl<>(pageContent,pageable,products.size());
    }

    @Override
    public List<Product> recentlyAddedProduct() {
        return productRepository.findTop10ByOrderByCreatedAtDesc();
    }
}
