package com.example.sapi.repository;

import com.example.sapi.model.Consignment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IConsignmentRepository {
    @Query(value = "select * from consignment c join product p on c.product_id = p.id", countQuery = "select * from consignment c join product p on c.product_id = p.id", nativeQuery = true)
    Page<Consignment> findAll(Pageable pageable);
}
