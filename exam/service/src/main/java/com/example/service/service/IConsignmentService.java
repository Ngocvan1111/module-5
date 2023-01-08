package com.example.service.service;

import com.example.service.model.Consignment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IConsignmentService {
 List<Consignment> findAll();
 void save(Consignment consignment);
 void delete(Long id);
 Consignment findById(Long id);
}
