package com.example.service.repository;

import com.example.service.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Long> {
    @Query (value = "select * from product", nativeQuery = true)
    List<Product> findAll();
}
