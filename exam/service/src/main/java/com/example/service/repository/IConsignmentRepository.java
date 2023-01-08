package com.example.service.repository;

import com.example.service.model.Consignment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface IConsignmentRepository extends JpaRepository<Consignment, Long> {
    @Query(value = "select * from consignment c join product p on c.product_id = p.id", countQuery = "select * from consignment c join product p on c.product_id = p.id", nativeQuery = true)
    List<Consignment> findAll();
    @Query(value = "select * from consignment as c where c.id = :id", nativeQuery = true)
    Optional<Consignment> findById(Long id);}
