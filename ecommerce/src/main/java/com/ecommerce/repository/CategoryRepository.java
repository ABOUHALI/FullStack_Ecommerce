package com.ecommerce.repository;

import com.ecommerce.model.Category;
import jakarta.annotation.security.PermitAll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository  extends JpaRepository<Category,Long> {

    public Category findByName(String name);

    @Query("SELECT c from Category c where c.name=:name AND c.parentCategory.name=:parentCategoryName")
    public Category findbyNameAndParent(@Param("name") String name , @Param("parentCategoryName")String parentCategoryName);

}
