package com.example.sapi.service;

import com.example.sapi.model.Consignment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IConsignmentService {
    public Page<Consignment> findAll(Pageable pageable);
}
